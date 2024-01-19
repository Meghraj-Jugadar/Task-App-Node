/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
        CREATE TABLE tasks(
            id SERIAL PRIMARY KEY,
            description VARCHAR(400) NOT NULL,
            completed BOOLEAN NOT NULL
        )
    `)
};

exports.down = pgm => {
    pgm.sql(`
        DROP TABLE tasks;
    `)
};
