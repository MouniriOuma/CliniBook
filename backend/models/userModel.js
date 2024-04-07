const mongoose =  require('mongoose')

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


module.exports = mongoose.model('user', userSchema)