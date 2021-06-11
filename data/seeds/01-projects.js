const projects = [
  {
    project_name: 'Play Video Games', 
    project_description: 'Do nothing but play video games', project_completed: false
  },
  {
    project_name: 'Take a Nap', 
    project_description: 'Go to sleep for 20 minutes', project_completed: true
  },
  {
    project_name: 'Eat Food', 
    project_description: 'Eat the best food in the world', project_completed: false
  }
]

const resources = [
  {
    resource_name: 'Halo',
    resource_description: 'Help Master Chief'
  },
  {
    resource_name: 'Pillow',
    resource_description: 'A illow used for your head'
  },
  {
    resource_name: 'Steak',
    resource_description: 'The fattest steak'
  }
]

const tasks = [
  {
    task_description: 'Log in and slay the covenant',
    task_notes: 'Determination',
    task_completed: 0,
    project_id: 1
  },
  {
    task_description: 'Destroy Halo',
    task_notes: 'Cortana needed',
    task_completed: 0,
    project_id: 1
  },
  {
    task_description: 'Sleep away',
    task_notes: 'Sleeping is healthy',
    task_completed: 0,
    project_id: 2
  },
  {
    task_description: 'Cook the food',
    task_notes: 'Eat well.',
    task_completed: 0,
    project_id: 3
  }
]

const resource_assignments = [
  {
    resource_id: 1,
    project_id: 1
  },
  {
    resource_id: 2,
    project_id: 2
  },
  {
    resource_id: 3,
    project_id: 3
  }
]

exports.seed = async function(knex) {
await knex('projects').insert(projects)
await knex('resources').insert(resources)
await knex('tasks').insert(tasks)
await knex('resource_assignments').insert(resource_assignments)
};
