const express = require('express')

const requireAuth = require('../middleware/requireAuth');

// controller functions
const { loginUser, signupUser, changeUserRole  } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// Route to change user role by admin
//router.put('/changeUserRole/:id', requireAuth, authorizeRoles('admin'), changeUserRole);
router.put('/changeUserRole/:id', requireAuth, changeUserRole);

module.exports = router