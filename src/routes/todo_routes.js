const express = require("express");
const router = express.Router();

const TodoController = require("../controllers/todo_controller");

//create a todo task
router.post("/", TodoController.createTodo);

//mark a todo as done
router.post("/done/:id", TodoController.updateTodo);

//mark a todo as undone
router.post("/undone/:id", TodoController.undoTodo);

//delete a todo task
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;