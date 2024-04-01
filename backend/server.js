require('dotenv').config()

const express = require('express')
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

//requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT)
})
