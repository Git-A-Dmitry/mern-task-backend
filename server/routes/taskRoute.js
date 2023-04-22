import express from 'express';
import Task from '../models/taskModel.js';
import { createTask, deleteTask, getSingleTask, getTasks } from '../controllers/taskController.js';

// define the router
const router = express.Router();

// Create a task (send data to the database)
router.post('/api/tasks', createTask);

// Read a task (get data from the database)
router.get('/api/tasks', getTasks);

// Read a single task (:id - params)
router.get('/api/tasks/:id', getSingleTask);

// Delete a task
router.delete('/api/tasks/:id', deleteTask);

export default router;
