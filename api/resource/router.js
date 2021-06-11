// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getAll()
    .then(resources => {
        res.json(resources)
    })
    .catch(next)
})

router.post('/', async (req, res) => {
    try {
        const addResource = await Resource.add(req.body)
        res.status(201).json(addResource)
    } catch (err) {
        res.status(500).json({ message: `Can not add resource to the data base: ${err}` })
    }
})

module.exports = router