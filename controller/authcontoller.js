    const userAuth = require('../models/userAuth');
    const bcrypt = require("bcryptjs");
    const jwt = require("jsonwebtoken");



    // registration here 
    exports.register = async (req, res) => {
    try {
        const { useremail, userphone, userpassword } = req.body;

        // Check user exists
        const userExists = await userAuth.findOne({ useremail });
        if (userExists) return res.status(400).json({ msg: "User already exists" });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userpassword, salt);

        // Save user
        const newUser = await userAuth.create({ useremail, userphone, userpassword: hashedPassword });

        res.status(201).json({ msg: "User registered", user: { id: newUser._id, useremail: newUser.useremail,userphone: newUser.userphone,userpassword: newUser.userpassword} });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
    };


    // login here 

    exports.login = async (req, res) => {
    try {
        const { useremail,userpassword } = req.body;

        // Check user
        const user = await userAuth.findOne({ useremail });
        if (!user) return res.status(400).json({ msg: "Invalid credentials" });

        // Check password
        const isMatch = await bcrypt.compare(userpassword, user.userpassword);
        if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

        // Create token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ msg: "Login successful", token });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
    };