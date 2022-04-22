const asyncError = require("express-async-handler");
const Tasks = require("../Model/Tasks");

// get all the tasks
const getAllItems = asyncError(async (req, res) => {
  return res.status(200).json({ task: req.tasks });
});
// create the task
const addItem = asyncError(async (req, res) => {
  const { name } = req.body;
  const task = await Tasks.create({ name });
  return res.status(200).json({ task });
});
// get task
const getSingleItem = asyncError(async (req, res) => {
  return res.status(200).json({ data: req.task });
});
// update task
const updateItem = asyncError(async (req, res) => {
  const task = req.task;
  const { newName } = req.body;
  task.name = newName;
  await task.save();
  return res.status(200).json(task);
});
// delete task
const deleteItem = asyncError(async (req, res) => {
  const task = req.task;
  await task.remove();
  return res.status(200).json("Item deleted");
});

const completedItem = asyncError(async (req, res) => {
  const task = req.task;
  task.completed = !task.completed;
  await task.save();
  return res.status(200).json(task);
});
module.exports = {
  getAllItems,
  getSingleItem,
  deleteItem,
  addItem,
  updateItem,
  completedItem,
};
