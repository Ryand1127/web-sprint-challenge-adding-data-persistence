// build your `Task` model here
const db = require('../../data/dbConfig')

async function getAll(){
    const task = await db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')
    return task.map(task => {
        return {
            ...task,
            task_completed: task.task_completed ? true : false
        }
    })
}

async function getById(task_id) {
    const task = await db('tasks').where({task_id}).first()
    return {
        ...task,
        task_completed: task.task_completed ? true : false
    }
}

async function add(newTask) {
    const [ id ] = await db('tasks').insert(newTask)
    return getById(id)
} 


module.exports = {
    getAll,
    add
}