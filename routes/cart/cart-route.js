const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    
    const url = `https://fakestoreapi.com/products/${id}`

    try {
        const request = await axios(url);
        const data = request.data;
        data.amount = 1;
        res.send(data);
    } catch (error) {
        res.send(error);
    }
    res.end();
})

module.exports = router;