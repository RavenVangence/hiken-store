const express = require('express');
const app = express();
const cors = require('cors');

// R O U T E S
const homeRoutes = require('../server/routes/home/products-route')
const cartRoutes = require('../server/routes/cart/cart-route.js')

// APP USE CASES
app.use(cors());
app.use('/', homeRoutes);
app.use('/cart/item', cartRoutes);


app.listen(process.env.PORT || 8000, console.log('listening on port 8000'));

app.get('/', (req, res) => {
    res.send('test successful');
});