import { Pool } from '../db.js';

export const getTasks = async(req, res) => {
    const [result] = await  Pool.query(
        'SELECT * FROM tasks ORDER BY created_at ASC',
    );
    res.json(result.rows);
};

export const getTask = async(req, res) => {
    console.log(req.params.id);
   const [result] = await Pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id,]);
   
   if (result.length === 0) {
       return res.status(404).json({
           message: 'Task not found',
       });
   }
    
   res.json(result[0]);
};

export const createTask = async(req, res) => {
    const {title, description} = req.body;
  const [result]= await Pool.query(
    'INSERT INTO tasks (title, description) VALUES (?, ?)', [
    title, 
    description
    ]
    );
    console.log(result);
    res.json({
        id: result.insertId,
        title,
        description,
    });
        res.send('creando tarea');
};

export const updateTask = async (req, res) => {
   const result = await Pool.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body, 
        req.params.id
    ]);
    res.json(result);
};

export const deleteTask = async (req, res) => {
   const [result]= await Pool.query('DELETE FROM tasks WHERE id = ?', 
    [
    req.params.id,
   ]);

    if (result.affectedRows === 0) {
        return res.status(404).json({
            message: 'Task not found',
        });
    }
   return res.sendStatus(204).json({
        message: 'Task deleted successfully',
    });
};
