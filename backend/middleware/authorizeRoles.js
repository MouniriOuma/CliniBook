const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


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
  
  
  module.exports = authorizeRoles;