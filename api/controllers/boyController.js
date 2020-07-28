const Boy = require('./../models/boyModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getAllBoys = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Boy.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const boys = await features.query;

  res.status(200).json({
    status: 'success',
    results: boys.length,
    data: {
      boys,
    },
  });
});

exports.getBoy = catchAsync(async (req, res, next) => {
  const boy = await Boy.findById(req.params.id).populate('reviews')

  if (!boy) {
    return next(new AppError('No Delivery Boy found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      boy,
    },
  });
});

exports.createBoy = factory.createOne(Boy);
exports.updateBoy = factory.updateOne(Boy);
exports.deleteBoy = factory.deleteOne(Boy);

exports.getBoyStats = catchAsync(async (req, res, next) => {
  const stats = await Boy.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: '$travelDistance',
        numBoys: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});

exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;
  const plan = await Boy.aggregate([
    {
      $unwind: '$startDates',
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$startDates' },
        numBoyStarts: { $sum: 1 },
        boys: { $push: '$name' },
      },
    },
    {
      $addField: { month: '$_id' },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: { numBoyStarts: -1 },
    },
    {
      $limit: 12,
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      plan,
    },
  });
});
