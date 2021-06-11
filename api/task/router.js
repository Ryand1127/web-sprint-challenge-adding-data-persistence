// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', (req, res , next) => {
    Task.getAll()
    .then((tasks) => {
        res.json(tasks)
    })
    .catch(next)
})

router.post('/', async (req, res) => {
    try {
        const addTask = await Task.add(req.body)
        res.status(201).json(addTask)
    } catch (err) {
        res.status(500).json({ message: `Can not add task to the data base: ${err}` })
    }
})

module.exports = router