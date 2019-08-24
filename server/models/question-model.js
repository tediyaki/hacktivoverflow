const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: [String],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }],
    votes: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Question', questionSchema)