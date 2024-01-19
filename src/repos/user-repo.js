const { insert } = require('../../../Database/src/repos/user-repo');
const pool = require('../pool');

class UserRepo{
    static async find(){
        const { rows } = await pool.query('SELECT * FROM users;');
        console.log(rows);
        return rows;
    }  

    static async insert(username, age){
        const { rows } = await pool.query('INSERT INTO users (username, age) VALUES ($1, $2) RETURNING *;',
        [username, age]
        );
        return rows[0];
    }

    static async findById(id){
        const { rows } = await pool.query('SELECT username, age FROM users WHERE id = $1',
            [id]
        );
        console.log(rows);
        return rows[0];
    }

    static async update(id, usename, age){
        const { rows } = await pool.query(
            'UPDATE users SET username = $1, age = $2 WHERE id = $3',
            [usename, age, id]
        );
        return rows[0];
    }
}

module.exports = UserRepo;