import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a task'],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Saving a task using "taskSchema" structure
const Task = mongoose.model('task', taskSchema);
export default Task;
