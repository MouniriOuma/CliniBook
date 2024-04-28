const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');


const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// get all Users
const getUsers = async (req, res) => {
  const users = await User.find({})
  res.status(200).json(users)
}

// get a single user
const getUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user'})
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({error: 'No such user'})
  }

  res.status(200).json(user)
}

// get user role
const getUserRoleByEmail = async (req, res) => {
  const { email } = req.params
  try {
    const user = await User.findOne({ email });
    //const user = await this.findOne({ email });
    console.log

    if (!user) {
      throw new Error('User not found');
    }

    // You can access the user's role from the user object
    const role = user.role;

    return role;
  } catch (error) {
    console.error('Error fetching user role:', error);
    throw error;
  }
};


// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email: user.email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Signup a user
const signupUser = async (req, res) => {
  const { name, lastName, email, address, city, password, phone } = req.body;

  try {
    const user = await User.signup(name, lastName, email, address, city, password, phone);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email: user.email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Change user role by admin
const changeUserRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.role = role;
    await user.save();

    res.status(200).json({ message: 'User role updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such user'})
  }

  const user = await User.findOneAndDelete({_id: id})

  if(!user) {
    return res.status(400).json({error: 'No such user'})
  }

  res.status(200).json(user)
}


module.exports = { signupUser, loginUser, changeUserRole, getUsers, getUser, deleteUser, getUserRoleByEmail };
