const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const firearmSchema = new Schema({
  rateOfFire: {
    type: Number,
    min: 0
  },
  ammoPerShot: {
    type: Number,
    min: 1,
    default: 1
  },
  requireCharging: {
    type: Boolean,
    default: false
  },
  timeToChargeShot: {
    type: Number,
    min: 0,
    default: 0
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

const Weapon = require('./weapon');

const Firearm = Weapon.discriminator('Firearm', firearmSchema);
module.exports = Firearm;
