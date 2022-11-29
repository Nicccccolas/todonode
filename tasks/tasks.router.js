//? En este archivo vamos a tener las rutas y sus respectivos verbos

const router = require('express').Router()

//?Tambien se puede exportar así 
//! const express = require('express')
//! const router = express.Router()

const taskServices = require('./tasks.services')

router.get('/todo', taskServices.getAllToDos)
router.post('/todo', taskServices.postToDo)
//? siempre que hay un id, ponerlo hasta el final
router.get('/todo/:id', taskServices.getToDoById)

module.exports = router
