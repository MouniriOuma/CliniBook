require('dotenv').config()

const express = require('express')
const centerRoutes = require('./routes/center')

//express app
const app = express()

//midleware
app.
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/center', centerRoutes)

//requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})
