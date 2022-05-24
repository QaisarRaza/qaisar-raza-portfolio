const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true,

    },
    message: {
        type: String,
        minLength: 3,
        maxLength: 300,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('contactus', contactSchema)