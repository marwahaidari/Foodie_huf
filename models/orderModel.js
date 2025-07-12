const pool = require('../db');

const createOrder = async ({ customer_id, restaurant_id, items }) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const orderResult = await client.query(
            `INSERT INTO orders (customer_id, restaurant_id, status, created_at)
       VALUES ($1, $2, 'pending', NOW()) RETURNING *`,
            [customer_id, restaurant_id]
        );

        const order = orderResult.rows[0];

        for (const item of items) {
            await client.query(
                `INSERT INTO order_items (order_id, menu_item_id, quantity)
         VALUES ($1, $2, $3)`,
                [order.id, item.menu_item_id, item.quantity]
            );
        }

        await client.query('COMMIT');
        return order;
    } catch (err) {
        await client.query('ROLLBACK');
        throw err;
    } finally {
        client.release();
    }
};

const getAllOrder = async (status) => {
    if (status) {
        const result = await pool.query(
            'SELECT * FROM orders WHERE status = $1',
            [status]
        );
        return result.rows;
    } else {
        const result = await pool.query('SELECT * FROM orders');
        return result.rows;
    }
};


const getOrdersByCustomer = async (customerId) => {
    const result = await pool.query('SELECT * FROM orders WHERE customer_id = $1', [customerId]);
    return result.rows;
};

const getOrdersByRestaurant = async (restaurantId) => {
    const result = await pool.query('SELECT * FROM orders WHERE restaurant_id = $1', [restaurantId]);
    return result.rows;
};

const updateOrderStatus = async (id, status) => {
    const result = await pool.query(
        'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *',
        [status, id]
    );
    return result.rows[0];
};

const deleteOrder = async (id) => {
    await pool.query('DELETE FROM order_items WHERE order_id = $1', [id]);
    await pool.query('DELETE FROM orders WHERE id = $1', [id]);
};

module.exports = {
    createOrder,
    getAllOrder,
    getOrdersByCustomer,
    getOrdersByRestaurant,
    updateOrderStatus,
    deleteOrder,
};
