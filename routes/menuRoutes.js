const express = require('express');
const router = express.Router();
const menuControllers = require('../controllers/menuController');
const pool = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM menu_items');
        res.json(result.rows)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error' })
    }
});
router.get('/restaurants/:id/menu', menuControllers.getMenu);
router.post('/restaurants/:id/menu', menuControllers.createMenuItem);
router.put('/menu/:id', menuControllers.updateMenuItem);
router.delete('/menu/:id', menuControllers.deleteMenuItem);
router.get('/popular-menu-items', menuControllers.getPopularItems);

module.exports = router;