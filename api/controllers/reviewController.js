const Review = require('./../models/reviewModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {}
  if (req.params.boyId) filter = { boy: req.params.boyId }

  const reviews = await Review.find(filter);

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

exports.setBoyUserIds = (req, res, next) => {
  // Allow nested routes
  if(!req.body.boy) req.body.boy = req.params.boyId;
  if(!req.body.user) req.body.user = req.user.id;
  next();
}

exports.createReview = factory.createOne(Review)
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
