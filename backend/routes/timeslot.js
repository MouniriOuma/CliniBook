const express = require('express')

const {
    getTimeSlots,
    getTimeSlot,
    createTimeSlot,
    deleteTimeSlot,
    updateTimeSlot
} = require('../controllers/timeslotController')

const router = express.Router()

// GET all Timeslots
router.get('/', getTimeslots)

// GET a single Timeslot
router.get('/:id', getTimeslot)

// POST a new Timeslot
router.post('/', createTimeslot)

// DELETE a Timeslot
router.delete('/:id', deleteTimeslot)

// UPDATE a Timeslot
router.patch('/:id', updateTimeslot)

module.exports = router