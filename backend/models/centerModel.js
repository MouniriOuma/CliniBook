const mongoose =  require('mongoose')

const Schema = mongoose.Schema

const centerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
    }
})

module.exports = mongoose.model('center', centerSchema)