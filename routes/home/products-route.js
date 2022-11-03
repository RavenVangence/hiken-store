const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/products', async (req, res) => {
    const url = 'https://fakestoreapi.com/products';
    try {
        const request = await axios(url);
        const data = request.data;
        res.send(data);
    } catch (error) {
        console.log(error);
    }
    res.end();
})

router.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    
    const url = `https://fakestoreapi.com/products/${id}`

    try {
        const request = await axios(url);
        const data = request.data;
        res.send(data);
    } catch (error) {
        res.send(error);
    }
    res.end();
})
module.exports = router;