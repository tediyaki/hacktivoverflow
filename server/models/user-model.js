const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reputation: {
        type: Number,
        default: 0
    },
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }]
})

module.exports = mongoose.model('User', userSchema)