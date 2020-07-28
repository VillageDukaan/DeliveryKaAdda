const express = require('express');

const {
    getAllReviews,
    createReview,
    deleteReview,
    updateReview,
    setBoyUserIds
} = require('./../controllers/reviewController');

const {
    protect
} = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router
.route('/')
.get(getAllReviews)
.post(protect, setBoyUserIds, createReview);

router
.route('/:id')
.patch(updateReview)
.delete(deleteReview);

module.exports = router;