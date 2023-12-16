const express = require('express');
const router = express.Router();
const { makeOrder, getOrders } = require('../controllers/OrderController');

// Make an order
router.post('/make-orders', makeOrder);

// Get all orders
router.get('/get-orders', getOrders);

module.exports = router;
