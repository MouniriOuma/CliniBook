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
router.get('/', getAppointments)

// GET a single Appointment
router.get('/:id', getAppointment)

// POST a new Appointment
router.post('/', createAppointment)

// DELETE a Appointment
router.delete('/:id', deleteAppointment)

// UPDATE a Appointment
router.patch('/:id', updateAppointment)

module.exports = router