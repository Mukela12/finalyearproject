// ProductModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  businessID: {
    type: String,
  },
  productImage: {
    type: String, // Assuming it's a URL
    required: true,
  },
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
