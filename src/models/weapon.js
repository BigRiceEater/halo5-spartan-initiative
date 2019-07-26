const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
  damage: {
    type: Number,
    required: true,
    min: 0
  },
  damageType: {
    type: String,
    enum: ['plasma', 'shell', 'energy']
  }
});

const Unit = require('./unit');
const Weapon = Unit.discriminator('Weapon', weaponSchema);

module.exports = Weapon;
