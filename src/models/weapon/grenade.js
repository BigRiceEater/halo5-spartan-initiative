const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grenadeSchema = new Schema({
  blastRadius: {
    type: Number,
    required: true,
    min: 0
  },
  detonateOnImpact: {
    type: Boolean,
    default: true
  },
  detonationTime: {
    type: Number,
    default: 0
  },
  sticky: {
    type: Boolean,
    default: false
  }
});

const Weapon = require('Weapon');
const Grenade = Weapon.discriminator('Grenade', grenadeSchema);

module.exports = Grenade;
