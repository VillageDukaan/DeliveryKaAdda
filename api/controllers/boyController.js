const Boy = require('./../models/boyModel');

const APIFeatures = require('./../utils/apiFeatures');

exports.getAllBoys = async (req, res) => {
  try {
    const features = new APIFeatures(Boy.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const boys = await features.query;

    //SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: boys.length,
      data: {
        boys,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getBoy = async (req, res) => {
  try {
    const boy = await Boy.findById(req.params.id);
    if (!boy) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        boy,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createBoy = async (req, res) => {
  try {
    const newBoy = await Boy.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        boy: newBoy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent',
    });
  }
};

exports.updateBoy = async (req, res) => {
  try {
    const boy = await Boy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        boy,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteBoy = async (req, res) => {
  try {
    const boy = await Boy.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: {
        boy,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getBoyStats = async (req, res) => {
  try {
    const stats = await Boy.aggregate([
      {
        $match: {ratingsAverage: {$gte: 4.5}}
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
        }
      }
    ]);

    res.status(200).json({
      status: 'success',
      data: {
        stats
      },
    });

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}

exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year * 1;
    const plan = await Boy.aggregate([
      {
        $unwind: '$startDates'
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          }
        }
      },
      {
        $group: {
          _id: { $month: '$startDates' },
          numBoyStarts: {$sum: 1},
          boys: { $push: '$name' }
        }
      },
      {
        $addField: { month: '$_id' }
      },
      {
        $project: {
          _id: 0
        }
      },
      {
        $sort: { numBoyStarts: -1 }
      },
      {
        $limit: 12
      }
    ]);

    res.status(200).json({
      status: 'success',
      data: {
        plan
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}
