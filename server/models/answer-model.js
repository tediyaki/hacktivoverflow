const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
    answer: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    votes: {
        type: Number,
        default: 0
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
})

module.exports = mongoose.model('Answer', answerSchema)