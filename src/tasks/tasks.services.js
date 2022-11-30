//? En este archivo vamos a utilizar todo lo relacionado al REQ y RES 

const tasksControllers = require('./tasks.controllers')

//* tasksControllers.createToDo()
//* tasksControllers.findAllToDos()
//* tasksControllers.findToDoById()

const getAllToDos = (req, res) => {
  tasksControllers.findAllToDos()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: err.message})    
    })
}

//? Get all con try y catch
// const getAllToDosWithTryCatch = (req, res) => {
//   try{
//     const data = tasksControllers.findAllToDos()
//     res.status(200).json(data)
//     return data
//   } catch(error) {
//     res.status(400).json({message: error.message})
//     return error
//   }
// }

const getToDoById = (req, res) => {
  const id = req.params.id 

  tasksControllers.findToDoById(id)
      .then((data) => {
        if(data){
          res.status(200).json(data)
        } else {
          res.status(404).json({message: 'Invalid ID'})
        }
      })
      .catch((err) => {
        res.status(400).json({message: err.message})    
      })
  }

const postToDo = (req, res) => {
  const {title, description} = req.body

  tasksControllers.createToDo({title, description})
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(400).json({message: err.message})
    })

  // if(title && description) {
  //   const data = tasksControllers.createToDo({title, description})
  //   res.status(201).json(data)
  // } else {
  //   res.status(400).json({message: 'Invalid data', fields:{title: 'String', description: 'String'}})
  // }
}

module.exports = {
  getAllToDos, 
  getToDoById,
  postToDo
}
