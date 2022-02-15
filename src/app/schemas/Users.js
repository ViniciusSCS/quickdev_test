const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    addressNumber: {
        type: String,
        required: true
    },
    primaryPhone: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema, 'user')