const env = require("dotenv");
env.config();//debe ir en este orden
const mongoose = require('mongoose');
const url = process.env.MONGO_URI;
console.log('La url de la base: ', url);

const connectDB = async () => {
  return await mongoose.connect(url)
}

module.exports = connectDB;

