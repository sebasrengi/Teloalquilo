import {Router} from "express";
import{
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask,
}from '../controllers/tasks.controller.js';

const router = Router();

router.get('/tasks', getTasks);
router.get('/task/:id', getTask);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id',deleteTask);
 

export default router;