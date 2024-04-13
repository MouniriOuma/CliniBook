const Appointment = require('../models/appointmentModel');
const mongoose = require('mongoose');

// Get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single appointment
const getAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such appointment' });
  }

  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ error: 'No such appointment' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new appointment
const createAppointment = async (req, res) => {
  const { user, timeSlot, validated, confirmedBy } = req.body;

  //check for empty fields
  let emptyFields = []

  if (!user) {
    emptyFields.push('user')
  }
  if (!timeSlot) {
    emptyFields.push('timeSlot')
  }
  if (validated === undefined || validated === null) {
    emptyFields.push('validated')
  }
  
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }
  
  try {
    const confirmedBy = req.user._id
    const appointment = await Appointment.create({ user, timeSlot, validated, confirmedBy });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such appointment' });
  }

  try {
    const appointment = await Appointment.findOneAndDelete({ _id: id });
    if (!appointment) {
      return res.status(400).json({ error: 'No such appointment' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an appointment
const updateAppointment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such appointment' });
  }

  try {
    const appointment = await Appointment.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    if (!appointment) {
      return res.status(400).json({ error: 'No such appointment' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAppointments,
  getAppointment,
  createAppointment,
  deleteAppointment,
  updateAppointment
};
