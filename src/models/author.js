const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    bio: {
        type: String,
        trim: true
    }
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author