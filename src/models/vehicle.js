const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  travelMode: {
    type: String,
    enum: ['ground', 'air'],
    required: true
  },
  numSeats: {
    type: Number,
    min: 1,
    default: 1
  },
  weapons: [
    {
      seat: { type: String, enum: ['driver', 'passenger'], default: 'driver' },
      weapon: { type: mongoose.Schema.Types.ObjectId, ref: 'Weapon' }
    }
  ]
});

const Vehicle = Unit.discriminator('Vehicle', vehicleSchema);

module.exports = Vehicle;
