// ProductRoute.js

const express = require('express');
const { addProduct, getAllProducts, editProduct, deleteProduct } = require('../controllers/ProductController');
const router = express.Router();

// Add a new product
router.post('/add-product', addProduct);

// Get all products
router.get('/get-all-products', getAllProducts);

//Edit product
router.put('/edit-product/:productId', editProduct);

//Delete product
router.delete('/delete-product/:productId', deleteProduct);

module.exports = router;
