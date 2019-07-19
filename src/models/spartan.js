const mongoose = require('mongoose');

const spartanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  loadouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WeaponLoadout' }]
});

// primary : {type: mongoose.Schema.Types.ObjectId, ref: 'Weapon' },
// secondary : {type: mongoose.Schema.Types.ObjectId, ref: 'Weapon' }

const Spartan = mongoose.model('Spartan', spartanSchema);

module.exports = Spartan;
