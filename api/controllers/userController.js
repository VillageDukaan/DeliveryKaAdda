const User = require('./../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { updatePassword } = require('./authController');

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if(allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
}

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    },
  });
});

exports.updateMe = catchAsync(async(req, res, next) => {
    // Create error if user POSTs password data
    if (req.body.password || req.body.passwordConfirm) {
        return next(new AppError('This route is not for password update. Please use updateMyPassword.', 400))
    }

    // Filtered out restricted elements
    const filteredBody = filterObj(req.body, 'name', 'email')

    // Update user document
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
        new: true,
        runValidators: true,
    });


    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    })
})

exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not at defined'
    })
}

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not at defined'
    })
}

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not at defined'
    })
}
exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not at defined'
    })
}