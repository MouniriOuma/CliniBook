const Center = require('../models/centerModel')

const mongoose = require('mongoose')

// get all Centers
const getCenters = async (req, res) => {
  const centers = await Center.find({})
  res.status(200).json(centers)
}

// get a single center
const getCenter = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such center'})
  }

  const center = await Center.findById(id)

  if (!center) {
    return res.status(404).json({error: 'No such center'})
  }

  res.status(200).json(center)
}

// create a new center
const createCenter = async (req, res) => {
  const {name, location, contact} = req.body

  // add to the database
  try {
    const center = await Center.create({ name, location, contact })
    res.status(200).json(center)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a center
const deleteCenter = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such center'})
    }
  
    const center = await Center.findOneAndDelete({_id: id})
  
    if(!center) {
      return res.status(400).json({error: 'No such center'})
    }
  
    res.status(200).json(center)
  }
  
  // update a center
const updateCenter = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such center'})
    }
  
    const center = await Center.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!center) {
      return res.status(400).json({error: 'No such center'})
    }
  
    res.status(200).json(center)
  }
  

module.exports = {
  getCenters,
  getCenter,
  createCenter,
  deleteCenter,
  updateCenter
}