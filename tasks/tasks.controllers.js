//? Este archivo va a manejar todo lo relacionado a acciones de la base de datos de toDo's

const toDoDB = []
//? ToDo
//* {
//*   id: 5,
//*   title: 'Practicar express',
//*   description: 'Ver vídeos de apoyo y crear otra API',
//*   is_completed: false
//*}

let id = 1

const findAllToDos = () => {
  //? Esta funcion debe traer todos los ToDo's
  return toDoDB
}

const findToDoById = (id) => {
  //? Esta funcion debe retornar un ToDo por el id
  const todo = toDoDB.find(item => item.id == id)
  return todo
}

const createToDo = (obj) => {
  //? Esta funcion debe crear un nuevo ToDo en mi base de datos y retornar el ToDo creado
  const newToDo = {
    id: id++,
    title: obj.title, 
    description: obj.description, 
    is_completed: false
  }
  toDoDB.push(newToDo)
  return newToDo
}

module.exports = {
  findAllToDos, 
  findToDoById, 
  createToDo
} 