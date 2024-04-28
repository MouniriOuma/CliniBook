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
  const {name, location, contact, specializations} = req.body

  //check for empty field
  let emptyFields = []

  if (!name) {
    emptyFields.push('name')
  }
  if (!location || !location.city || !location.address) {
    emptyFields.push('location');
  }
  if (!contact) {
    emptyFields.push('contact')
  }
  if (!specializations || !Array.isArray(specializations) || specializations.some(spec => typeof spec !== 'string')) {
    emptyFields.push('specializations');
  }
  
  
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }
  
  // add to the database
  try {
    const center = await Center.create({ name, location, contact, specializations })
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