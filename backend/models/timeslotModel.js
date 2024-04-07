const mongoose = require('mongoose');

const Schema = mongoose.Schema

const timeSlotSchema = new Schema({
  healthcareCenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'center',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true,
    min: 1
  },
  reservedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: null
  }
});

module.exports = mongoose.model('timeSlot', timeSlotSchema)