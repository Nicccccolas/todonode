//? Este archivo va a manejar todo lo relacionado a acciones de la base de datos de toDo's

const Tasks = require('../models/task.model')


const toDoDB = []
//? ToDo
//* {
//*   id: 5,
//*   title: 'Practicar express',
//*   description: 'Ver vídeos de apoyo y crear otra API',
//*   is_completed: false
//*}

let id = 1


const findAllToDos = async() => {
  //? Esta funcion debe traer todos los ToDo's
  const data = await Tasks.findAll()
  return data
}

const findToDoById = async (id) => {
  //? Esta funcion debe retornar un ToDo por el id
  
  // ? Sirven para hacer comparacion
  // ? const todo = await Tasks.findByPk(id)
  const todo = await Tasks.findOne({
    where: {
      id: id
    }
  })
  return todo
}

const createToDo = async (obj) => {
  //? Esta funcion debe crear un nuevo ToDo en mi base de datos y retornar el ToDo creado
  const newToDo = await Tasks.create({
    title: obj.title, 
    description: obj.description, 
  })
  return newToDo
}

module.exports = {
  findAllToDos, 
  findToDoById, 
  createToDo
} 