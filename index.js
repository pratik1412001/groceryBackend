require('dotenv').config();
const express  = require('express');
const port = process.env.port || 7000;
const bodyParser = require("body-parser");
const app = express();
const connectDB = require('./config/db.js')
const cors = require("cors");
// database connection here 
connectDB()


// middle ware 
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// routes here 
app.use("/api/auth", require("./routes/auth.js"));


app.listen(port,()=>{
    console.log(`server start here at ${port} number`);
})