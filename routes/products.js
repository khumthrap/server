// routes/products.js
const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.send('this is product route');
});

router.get('/101', (req, res) => {
    res.send('this is product 101 route');
});

router.get('/102', (req, res) => {
    res.send('this is product 102 route');
});


module.exports = router;