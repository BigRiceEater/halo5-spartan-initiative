const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
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
  },
  damage: {
    type: String,
    required: true
  },
  rateOfFire: {
    type: Number,
    min: 0
  },
  canPickupAmmo: {
    type: Boolean,
    required: true
  },
  maxAmmo: {
    type: Number,
    required: true,
    min: 0
  },
  ammoPerClip: {
    type: Number,
    required: true,
    min: 0
  }
});

const Weapon = mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;
