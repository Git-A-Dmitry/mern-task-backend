import express from 'express';
import Task from '../models/taskModel.js';
import { createTask, deleteTask, getSingleTask, getTasks, updateTask } from '../controllers/taskController.js';

// define the router
const router = express.Router();

// API Endpoints for CRUD actions

// Create a task (send data to the database)
// router.post('/api/tasks', createTask);

// Check server.js (app.use)
router.post('/', createTask);

// Read a task (get data from the database)
router.get('/', getTasks);

// Read a single task (:id - params)
router.get('/:id', getSingleTask);

// Delete a task
router.delete('/:id', deleteTask);

// Update a task
router.put('/:id', updateTask);

// to update a single property
// router.patch('/api/tasks/:id', updateTask);

export default router;
