const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const firearmSchema = new Schema({
  shooting: {
    rateOfFire: {
      type: Number,
      min: 0
    },
    ammoPerShot: {
      type: Number,
      min: 1,
      default: 1
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
  },
  charging: {
    canCharge: {
      type: Boolean,
      default: false
    },
    mustChargeToUse: {
      type: Boolean,
      default: false
    },
    timeToChargeShot: {
      type: Number,
      min: 0,
      default: 0
    },
    immediateShotWhenCharged: {
      type: Boolean,
      default: true
    }
  },
  zoom: {
    canZoom: {
      type: Boolean,
      default: false
    },
    zoomLevels: [
      {
        level: {
          type: String,
          enum: ['2x', '6x', '12x']
        }
      }
    ]
  }
});

const Weapon = require('./weapon');

const Firearm = Weapon.discriminator('Firearm', firearmSchema);
module.exports = Firearm;
