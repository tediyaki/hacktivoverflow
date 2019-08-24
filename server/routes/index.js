const router = require('express').Router()
const userRouter = require('./user-route')
const questioRouter = require('./question-route')
const answerRouter = require('./answer-route')
const commentRouter = require('./comment-route')

router.use('/user', userRouter)
router.use('/question', questioRouter)
router.use('/answer', answerRouter)
router.use('/comment', commentRouter)

module.exports = router