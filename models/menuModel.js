const { populate } = require('dotenv');
const pool = require('../db')

const getMenuByRestaurant = async (restaurantId) => {
    const result = await pool.query(
        'SELECT * FROM menu_items WHERE restaurant_id = $1',
        [restaurantId]
    );
    return result.rows;
}

const getPopularMenuItems = async () => {
    const result = await pool.query(`
        SELECT mi.id, mi.name, COUNT(oi.menu_item_id) AS order_count
        FROM menu_items mi
        JOIN order_items oi ON mi.id = oi.menu_item_id
        GROUP BY mi.id, mi.name
        ORDER BY order_count DESC
        LIMIT 5
    `);
    return result.rows;
};


const addMenuItem = async ({ restaurant_id, name, price, is_available }) => {
    const result = await pool.query(
        `INSERT INTO menu_items  ( restaurant_id, name, price, is_available)
        VALUES ($1,$2,$3,$4)RETURNING* `,
        [restaurant_id, name, price, is_available]

    );
    return result.rows[0]
}


const updateMenuItem = async (id, { name, price, is_available }) => {
    const result = await pool.query(
        `UPDATE menu_items SET name = $1, price = $2, is_available = $3
        WHERE id = $4 RETURNING *`,
        [name, price, is_available, id]
    );
    return result.rows[0]
};



const deleteMenuItem = async (id) => {
    await pool.query('DELETE FROM menu_items WHERE id=$1', [id]);
};

module.exports = {
    getMenuByRestaurant,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    getPopularMenuItems,

}