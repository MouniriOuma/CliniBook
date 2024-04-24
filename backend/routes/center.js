const express = require('express')

const {
  getCenters, 
  getCenter, 
  createCenter, 
  deleteCenter, 
  updateCenter,
} = require('../controllers/centerController')

const requireAuth = require('../middleware/requireAuth');

const router = express.Router()

router.use(requireAuth)

/* 
// require auth for all Appointment routes

// GET all Centers
router.get('/', authorizeRoles(["admin","user"]), getCenters)

// GET a single Center
router.get('/:id', authorizeRoles(["admin","user"]), getCenter)

// POST a new Center
router.post('/', authorizeRoles("admin"), createCenter)

// DELETE a Center
router.delete('/:id', authorizeRoles("admin"),deleteCenter)

// UPDATE a Center
router.patch('/:id', authorizeRoles("admin"), updateCenter) */



// GET all Centers
router.get('/',  getCenters)

// GET a single Center
router.get('/:id',  getCenter)

// POST a new Center
router.post('/',  createCenter)

// DELETE a Center
router.delete('/:id', deleteCenter)

// UPDATE a Center
router.patch('/:id',  updateCenter)

module.exports = router