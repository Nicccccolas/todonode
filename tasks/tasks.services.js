//? En este archivo vamos a utilizar todo lo relacionado al REQ y RES 

const tasksControllers = require('./tasks.controllers')

//* tasksControllers.createToDo()
//* tasksControllers.findAllToDos()
//* tasksControllers.findToDoById()

const getAllToDos = (req, res) => {
  const data = tasksControllers.findAllToDos()
  res.status(200).json(data)
}

const getToDoById = (req, res) => {
  const id = req.params.id 
  const data = tasksControllers.findToDoById(id)
  if(data){
    res.status(200).json(data)
  } else {
    res.status(404).json({message: 'Invalid id'})
  }
}

const postToDo = (req, res) => {
  const {title, description} = req.body
  if(title && description) {
    const data = tasksControllers.createToDo({title, description})
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'Invalid data', fields:{title: 'String', description: 'String'}})
  }
}

module.exports = {
  getAllToDos, 
  getToDoById,
  postToDo
}
