const pool = require('../db');

exports.getAllRestaurant = async () => {
    const result = await pool.query('SELECT *FROM restaurants');
    return result.rows;
};

exports.createRestaurant = async (name, location) => {
    const result = await pool.query('INSERT INTO restaurants (name, location) VALUES ($1,$2 RETURNING *',
        [name, Location]
    );
    return result.rows[0];
};

exports.updateRestaurant = async (id, name, location) => {
    const result = await pool.query('UPDATE restaurant SET name= $1, location=$2 WHERE id=$3 RETURNING *',
        [name, location, id]
    );
    return result.rows[0];
};

exports.deleteRestaurant = async (id) => {
    await pool.query('DELETE FROM restaurant WHERE id=$1', [id])
};