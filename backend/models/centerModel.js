const mongoose =  require('mongoose')

const Schema = mongoose.Schema

const centerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
    },
    specializations: [{
        type: String
    }]
})

module.exports = mongoose.model('center', centerSchema)