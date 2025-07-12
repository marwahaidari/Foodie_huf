const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


const menuRoutes = require('./routes/menuRoutes');
const customerRoutes = require('./routes/customerRoutes')
const orderRoutes = require('./routes/orderRoutes')
const restaurantRoutes = require('./routes/restaurants');

app.use('/', menuRoutes)

require('dotenv').config();


app.use('/', orderRoutes);

app.get('/', (req, res) => {
    res.send('foodie HUB API is running!')
})

app.use('/menu', menuRoutes)

app.use('/restaurants', restaurantRoutes);

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
