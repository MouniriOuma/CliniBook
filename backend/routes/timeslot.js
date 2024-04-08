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
router.get('/', getTimeSlots)

// GET a single Timeslot
router.get('/:id', getTimeSlot)

// POST a new Timeslot
router.post('/', createTimeSlot)

// DELETE a Timeslot
router.delete('/:id', deleteTimeSlot)

// UPDATE a Timeslot
router.patch('/:id', updateTimeSlot)

module.exports = router