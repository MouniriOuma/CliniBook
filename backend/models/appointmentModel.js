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
    type: String,
    enum: ['valide', 'pending', 'unvalide'],
    default: 'pending',
  },
  confirmedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: null,
  }
})

module.exports = mongoose.model('appointment', appointmentSchema)