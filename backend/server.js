require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const centerRoutes = require('./routes/center')
const appointmentRoutes = require('./routes/appointment')
const timeslotRoutes = require('./routes/timeslot')
const userRoutes = require('./routes/user')


//express app
const app = express()

//midleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/center', centerRoutes)
app.use('/api/appointment', appointmentRoutes)
app.use('/api/timeSlot', timeslotRoutes)
app.use('/api/user', userRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 


