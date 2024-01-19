const pg = require('pg');

class Pool{
    __pool = null;

    connect(options){
        this.__pool = new pg.Pool(options);
        return this.__pool.query('SELECT 1 + 1;');
    }

    close(){
        return this.__pool.end();
    }

    query(sql, params){
        return this.__pool.query(sql, params);
    }
}

module.exports = new Pool();