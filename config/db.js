const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Database  connected successfully ");
  } catch (error) {
    console.error("❌ MongoDB Database connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;