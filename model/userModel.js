const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
});

// use schema to create a model

module.exports = mongoose.model('User', userSchema);
