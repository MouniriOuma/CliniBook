const TimeSlot = require('../models/timeSlotModel');
const mongoose = require('mongoose');

// Get all time slots
const getTimeSlots = async (req, res) => {
  try {
    const timeSlots = await TimeSlot.find({});
    res.status(200).json(timeSlots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single time slot
const getTimeSlot = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such time slot' });
  }

  try {
    const timeSlot = await TimeSlot.findById(id);
    if (!timeSlot) {
      return res.status(404).json({ error: 'No such time slot' });
    }
    res.status(200).json(timeSlot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new time slot
const createTimeSlot = async (req, res) => {
    const { healthcareCenter, date, startTime, endTime, capacity, reservedBy } = req.body;
  
    try {
      const timeSlot = await TimeSlot.create({ healthcareCenter, date, startTime, endTime, capacity, reservedBy });
      res.status(201).json(timeSlot);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

// Delete a time slot
const deleteTimeSlot = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such time slot' });
  }

  try {
    const timeSlot = await TimeSlot.findOneAndDelete({ _id: id });
    if (!timeSlot) {
      return res.status(400).json({ error: 'No such time slot' });
    }
    res.status(200).json(timeSlot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a time slot
const updateTimeSlot = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such time slot' });
  }

  try {
    const timeSlot = await TimeSlot.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    if (!timeSlot) {
      return res.status(400).json({ error: 'No such time slot' });
    }
    res.status(200).json(timeSlot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTimeSlots,
  getTimeSlot,
  createTimeSlot,
  deleteTimeSlot,
  updateTimeSlot
};
