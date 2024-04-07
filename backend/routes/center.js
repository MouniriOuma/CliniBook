const express = require('express')

const {
  getCenters, 
  getCenter, 
  createCenter, 
  deleteCenter, 
  updateCenter,
} = require('../controllers/centerController')

const router = express.Router()

// GET all Centers
router.get('/', getCenters)

// GET a single Center
router.get('/:id', getCenter)

// POST a new Center
router.post('/', createCenter)

// DELETE a Center
router.delete('/:id', deleteCenter)

// UPDATE a Center
router.patch('/:id', updateCenter)

module.exports = router