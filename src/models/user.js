const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Keep the format that was used to enter the name
  displayname: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  // all lower-case to check for uniqueness.
  username: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: username => {
        User.findOne(username, (err, doc) => doc);
      },
      message: 'username already exists'
    }
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
