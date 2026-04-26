const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  company: { type: String, required: true }, // The company name you requested
  email: { type: String, required: true, unique: true } // Good practice for login
});

module.exports = mongoose.model('User', userSchema);