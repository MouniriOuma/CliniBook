const express = require('express')

const router = express.Router()

// GET all center
  router.get('/', (req, res) => {
    res.json({mssg: 'GET all centers'})
  })
  
  // GET a single center
  router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single center'})
  })
  
  // POST a new center
  router.post('/', (req, res) => {
    res.json({mssg: 'POST a new center'})
  })
  
  // DELETE a center
  router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a center'})
  })
  
  // UPDATE a center
  router.put('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a center'})
})

  // UPDATE a center
  router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a center'})
  })

module.exports = router