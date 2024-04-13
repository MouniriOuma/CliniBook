const express = require('express')

const {
    getTimeSlots,
    getTimeSlot,
    createTimeSlot,
    deleteTimeSlot,
    updateTimeSlot
} = require('../controllers/timeslotController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all Appointment routes
router.use(requireAuth)

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