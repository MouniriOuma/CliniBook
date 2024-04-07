require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const centerRoutes = require('./routes/center')

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

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    //listening requests
    app.listen(process.env.PORT, () => {
        console.log('connected to DB and listening on port ', process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })


