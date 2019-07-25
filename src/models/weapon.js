const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
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

const Unit = require('./unit');
const Weapon = Unit.discriminator('Weapon', weaponSchema);

module.exports = Weapon;
