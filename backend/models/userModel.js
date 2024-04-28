const mongoose =  require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => {
        const re = /^[\w-.]+@([\w-.]+){2,}$/;
        return re.test(value);
      },
      message: 'Please enter a valid email address',
    },
  },
  address: {
      type: String,
      required: true    
  },
  city: {
      type: String,
      required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

// static signup method
userSchema.statics.signup = async function(name, lastName, email, address, city, password, phone) {

  // validation
  if (!email || !password || !name || !address || !city || !lastName || !phone) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough')
  }
  if (!validator.isMobilePhone(phone)) { 
    throw Error('Phone number is not valid');
  }
  if (!city || !address) {
    throw Error('All fields must be filled')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ name, lastName, email, address, city, password: hash, phone })

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('user', userSchema)