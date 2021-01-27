const express = require('express')
const router = express.Router()

const Users = require('./users-model')
const noTokenNoPass = require('../auth/protection-middleware')

router.get('/', noTokenNoPass, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json(err.message)
    })
})

module.exports = router