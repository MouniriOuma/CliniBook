const express = require('express')

const requireAuth = require('../middleware/requireAuth');

// controller functions
const { loginUser, signupUser, changeUserRole, getUsers, getUser, deleteUser  } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

//get all users
router.get('/', requireAuth,  getUsers);

//get user
router.get('/:id', requireAuth,  getUser);

// Route to change user role by admin
//router.patch('/changeUserRole/:id',  authorizeRoles('admin'), changeUserRole);
router.patch('/changeUserRole/:id', requireAuth,  changeUserRole);

// DELETE a user
router.delete('/:id', requireAuth,  deleteUser )

module.exports = router