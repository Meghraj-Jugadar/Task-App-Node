/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(30) NOT NULL,
            age INTEGER NOT NULL
        )
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE usera;
    `)
};
