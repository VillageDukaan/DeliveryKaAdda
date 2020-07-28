const express = require('express');

const {
    getAllReviews,
    getReview,
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
.get(getReview)
.patch(updateReview)
.delete(deleteReview);

module.exports = router;