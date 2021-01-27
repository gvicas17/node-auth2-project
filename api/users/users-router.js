const express = require('express')
const router = express.Router()

const Users = require('./users-model')

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        res.json(err.message)
    })
})

module.exports = router