// build your `Resource` model here
const db = require('../../data/dbConfig')

function getAll() {
    return db('resources')
}

function getById(resource_id) {
    return db('resources').where({resource_id}).first()
}

async function add(newResource) {
    const [ id ] = await db('resources').insert(newResource)
    return getById(id)
} 

module.exports = {
    getAll,
    getById,
    add
}