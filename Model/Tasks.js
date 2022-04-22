const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [5, "Please provide a name with ming length 5"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Tasks", TaskSchema);
