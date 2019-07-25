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
    enum: ['Convenant', 'UNSC', 'Prometheans']
  }
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
