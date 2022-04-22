const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getSingleItem,
  deleteItem,
  addItem,
  updateItem,
  completedItem,
} = require("../controller/task");
const {
  checkAllTasks,
  checkSingleTask,
} = require("../Database/databaseHelpers");
router.get("/", checkAllTasks, getAllItems);
router.post("/", addItem);
router.get("/:id", checkSingleTask, getSingleItem);
router.put("/:id", checkSingleTask, updateItem);
router.delete("/:id", checkSingleTask, deleteItem);
router.get("/completed/:id", checkSingleTask, completedItem);

module.exports = router;
