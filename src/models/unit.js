const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  faction: {
    type: String,
    required: true,
    enum: ['Convenant', 'UNSC', 'Promethean']
  }
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
