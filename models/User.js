const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  walletAddress: { type: String, required: true },
  garden: { type: Array, default: [] },
  referralLink: { type: String, default: '' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
