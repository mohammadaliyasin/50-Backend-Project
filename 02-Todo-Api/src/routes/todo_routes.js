const express = require('express')
const router = express.Router();

//Import All todos
const todoController = require('../controller/todo_controller');

router.post('/',todoController.createTodo);
router.get('/',todoController.getAllTodos);
router.get('/:id', todoController.getTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;