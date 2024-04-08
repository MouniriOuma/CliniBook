const mongoose =  require('mongoose')

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  timeSlot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'timeSlot',
    required: true,
  },
  validated: {
    type: Boolean,
    default: false,
  },
  confirmedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }
})

module.exports = mongoose.model('appointment', appointmentSchema)