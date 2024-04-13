const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
  // verify user is authenticated
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]

  try {
    const { _id } = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({ _id }).select('_id')
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

// Check if user is an admin
const authorizeRoles = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.role
    if (permissions.includes(userRole)) {
    next();
  } else {
    return res.status(403).json({ error: 'Access forbidden. Only admins are allowed.' });
  }
  }
  
};


module.exports = {requireAuth, authorizeRoles};