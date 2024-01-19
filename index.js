const pool = require('./src/pool');

const app = require('./src/app.js');

pool.connect({
    host: 'localhost',
    port: '5432',
    database: 'task-manager',
    user: 'postgres',
    password: 'root'
})

    .then(()=>{
        app().listen(3005,()=>{
            console.log('Server Running on port 3005!');
        })
    })
    .catch((err)=>console.log(err))