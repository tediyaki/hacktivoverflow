const express = require('express')
const app = express()
const router = require('./routes/index')

const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// app.get('/', (req, res) => res.json({m: 'yoew'}))
app.use('/', router)

app.use((err, req, res, next) => {
    if(!err.status) {
        err.status = 500
    }
    res.status(err.status).json({status: err.status, message: err.message || 'Internal Server Error'})
})

module.exports = app