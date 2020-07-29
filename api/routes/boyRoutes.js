const express = require('express');
const reviewRouter = require('./../routes/reviewRoutes');
const {
    getAllBoys,
    createBoy,
    getBoy,
    updateBoy,
    deleteBoy,
    getBoyStats,
    getMonthlyPlan
} = require('./../controllers/boyController');

const {
    protect,
    restrictTo,
} = require('./../controllers/authController');

const router = express.Router();

router.use('/:boyId/reviews', reviewRouter);

router.route('/boy-stats').get(getBoyStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router
.route('/')
.get(getAllBoys)
.post(protect, restrictTo('admin'), createBoy);

router
.route('/:id')
.get(getBoy)
.patch(protect, restrictTo('admin'), updateBoy)
.delete(protect, restrictTo('admin'),deleteBoy);

module.exports = router;