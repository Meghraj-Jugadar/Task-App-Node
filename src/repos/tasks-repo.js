const pool = require('../pool');
const { insert } = require('./user-repo');

class TasksRepo{
    static async find(){
        const { rows } = await pool.query('SELECT * FROM tasks;');
        console.log(rows);
        return rows;
    }

    static async insert(description, completed){
        const { rows } = await pool.query('INSERT INTO tasks (description, completed) VALUES ($1, $2) RETURNING *;',
            [description, completed]
        );
        return rows[0];
    }

    static async findById(id){
        const { rows } = await pool.query('SELECT description, completed FROM tasks WHERE id = $1',
            [id]
        );
        return rows[0];
    }
}

module.exports = TasksRepo;