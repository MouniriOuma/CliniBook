const express = require('express')

const {
    getAppointments,
    getAppointment,
    createAppointment,
    deleteAppointment,
    updateAppointment
} = require('../controllers/appointmentController')

const router = express.Router()

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