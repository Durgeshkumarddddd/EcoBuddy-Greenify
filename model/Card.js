const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: 0,
  },
  category: {
    type: String,
    enum: ['Recyclable', 'Biodegradable', 'Organic', 'Sustainable', 'Eco-Friendly'],
    required: true,
  },
  ecoRating: {
    type: Number,
    min: 1,
    max: 5,
    default: 3, // Default eco-rating if not provided
  },
  sustainabilityScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 50, // Score representing sustainability impact
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 10,
  },
  imageUrl: {
    type: String,
    default: 'https://example.com/default-product-image.jpg', // Placeholder image
  },
  manufacturer: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports=Product;