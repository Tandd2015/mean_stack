const mongoose = require('mongoose');

const { Schema } = mongoose;

console.log('loading express app (Model-Product) (Schema-ProductSchema)')

const ProductSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Product title is a required field"],
    minlength: [3, "Product title length must be longer than 2 characters"],
    maxlength: [69, "Product title length must be shorter than 68 characters"],
  },
  price: {
    type: Number,
    required: [true, "Release year is a required field"],
  },
  image: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', ProductSchema);

