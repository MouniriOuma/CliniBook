const express = require('express')

const {
    getAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
} = require('../controllers/appointmentController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all Appointment routes
router.use(requireAuth)

// GET all Appointments
router.get('/', requireAuth, getAppointments)

// GET a single Appointment
router.get('/:id', requireAuth, getAppointment)

// POST a new Appointment
router.post('/', requireAuth, createAppointment)

// DELETE a Appointment
router.delete('/:id', requireAuth, deleteAppointment)

// UPDATE a Appointment
router.patch('/:id', requireAuth, updateAppointment)

module.exports = router