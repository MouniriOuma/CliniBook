const express = require('express')

const requireAuth = require('../middleware/requireAuth');

// controller functions
const { loginUser, signupUser, changeUserRole, getUsers, getUser, deleteUser  } = require('../controllers/userController')

const router = express.Router()

// require auth for all user routes
router.use(requireAuth)

//get all users
router.get('/',  getUsers);

//get user
router.get('/:id',  getUser);

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// Route to change user role by admin
//router.patch('/changeUserRole/:id',  authorizeRoles('admin'), changeUserRole);
router.patch('/changeUserRole/:id',  changeUserRole);

// DELETE a user
router.delete('/:id',  deleteUser )

module.exports = router