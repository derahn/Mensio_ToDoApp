const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

// Create Schema
const taskSchema = new Schema({
  taskname: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  complete: { 
    type: Boolean, 
    default: false 
  },
});

module.exports = Mongoose.model("Task", taskSchema);
