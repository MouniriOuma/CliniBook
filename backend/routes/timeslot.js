const express = require('express')

const {
    getTimeSlots,
    getTimeSlot,
    createTimeSlot,
    deleteTimeSlot,
    updateTimeSlot
} = require('../controllers/timeslotController')

const requireAuth = require('../middleware/requireAuth');

const router = express.Router()

// require auth for all Appointment routes
router.use(requireAuth)

// GET all Timeslots
router.get('/', requireAuth, getTimeSlots)

// GET a single Timeslot
router.get('/:id', requireAuth, getTimeSlot)

// POST a new Timeslot
router.post('/', requireAuth, createTimeSlot)

// DELETE a Timeslot
router.delete('/:id', requireAuth, deleteTimeSlot)

// UPDATE a Timeslot
router.patch('/:id', requireAuth, updateTimeSlot)

module.exports = router