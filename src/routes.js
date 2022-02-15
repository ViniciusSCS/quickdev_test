const { Router } = require('express');



const UsersController = require('./app/controllers/UsersController')


const routes = new Router();

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.store)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete)


module.exports = routes