const Todo = require("../models/todo_model");

exports.createTodo = async (req, res) => {
  try {
    const todos = await Todo.create(req.body);
    return res.status(201).json(todos);
  } catch (error) {
    console.error("ERROR IN CREATE TODO:", error);
    return res.status(500).json(error.message);
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const { status, page = 1, limit = 5 } = req.query;

    let query = {};
    if (status) query.status = status;

    const todos = await Todo.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(todos);
  } catch (error) {
    console.error("ERROR IN FETCHING ALL TODOS:", error);
    return res.status(500).json(error.message);
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id);
    if (!todos) {
      return res.status(404).json("Todo not found");
    }
    return res.status(200).json(todos);
  } catch (error) {
    console.error("ERROR IN FETCHING TODO:", error);
    return res.status(500).json(error.message);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todos = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todos) {
      return res.status(404).json("Todo not found");
    }
    return res.status(200).json(todos);
  } catch (error) {
    console.error("ERROR IN UPDATING TODO:", error);
    return res.status(500).json(error.message);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todos = await Todo.findByIdAndDelete(req.params.id);
    if (!todos) {
      return res.status(404).json("Todo not found");
    }
    return res.status(200).json("Todo deleted successfully");
  } catch (error) {
    console.error("ERROR IN DELETING TODO:", error);
    return res.status(500).json(error.message);
  }
};
