const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('User', userSchema);
