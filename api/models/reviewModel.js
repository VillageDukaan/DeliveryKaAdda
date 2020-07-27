const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Review cannot be empty!'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  boy: {
    type: mongoose.Schema.ObjectId,
    ref: 'Boy',
    required: [true, 'Review must belong to a delivery boy'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a User'],
  }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
}
);

reviewSchema.pre(/^find/, function(next) {
    this.populate({
        path:'user',
        select: 'name photo'
    });

    next();
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
