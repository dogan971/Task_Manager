const Tasks = require("../Model/Tasks");
const asyncError = require("express-async-handler");

const checkAllTasks = asyncError(async (req, res, next) => {
  const tasks = await Tasks.find();
  console.log(tasks);
  if (tasks == "") return next(res.status(400).json("Dont found any tasks"));
  req.tasks = tasks;
  next();
});

const checkSingleTask = asyncError(async (req, res, next) => {
  const { id } = req.params;
  if (!id) return next(console.error("Must to be id"));
  const task = await Tasks.findById(id);
  if (!task) return next(res.status(400).json("Dont found task"));
  req.task = task;
  next();
});
module.exports = { checkAllTasks, checkSingleTask };
