const Todo = require("../models/todosModel");

Controllers = {
  createTodo: async (req, res, next) => {
    try {
      const todo = new Todo(req.body);
      const result = await todo.save();
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(result);
      console.log(error.message);
    }
  },

  updateTodo: async (req, res, next) => {
    try {
      const id = req.params.id;
      const result = await Todo.findByIdAndUpdate(id, { done: "1" });
      if (!result) {
        res.status(400).send("Todo does not exist.");
      }
      else {
        res.status(200).send("Successfully marked as done.");
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteTodo: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Todo.findByIdAndDelete(id);
      if (!result) {
        res.status(400).send("Todo does not exist.");
      }
      else {
        res.status(200).send("Deleted Successfully");
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = Controllers;