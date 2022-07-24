const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async (connectionURI) => {
  try {
    await mongoose.connect(connectionURI);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  } 
};



module.exports ={
    connectDB
}
