const express = require('express');
const cors = require('cors');

const app = express();

// R O U T E S
const homeRoutes = require('./routes/home/products-route.js')
const cartRoutes = require('./routes/cart/cart-route.js')

// APP USE CASES
app.use(cors());
app.use('/', homeRoutes);
app.use('/cart/item', cartRoutes);
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
app.get('/', (req, res) => {
    res.send('test successful');
});

app.listen(process.env.PORT || 8000, console.log('listening on port 8000'));
