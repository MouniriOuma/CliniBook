const express = require('express')

//express app
const app = express()

//routes
app.get('/', (req, res) =>{
    res.json({mssg:'welcome'})
})

//requests
app.listen(4000, () => {
    console.log('listening on port 4000')
})
