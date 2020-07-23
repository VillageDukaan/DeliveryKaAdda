const mongoose = require('mongoose');

const boySchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Delivery Person must have a name']
    },
    phone: {
      type: Number,
      required: [true, 'Mobile Number is Required'],
      unique: true
    },
    ratingsAverage: {
      type: Number,
      default: 4.5
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'Delivery Price is needed']
    },
    priceDiscount: Number,
    summary: {
      type: String,
      trim: true,
      required: [true, 'Delivery Person must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'Delivery person must have a cover image']
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now()
    },
    isApproved: {
      type: Boolean,
      default: false
    }
  });
  
  const Boy = mongoose.model('Boy', boySchema);

  module.exports = Boy;