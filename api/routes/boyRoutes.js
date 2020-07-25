const express = require('express');
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

router.route('/boy-stats').get(getBoyStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router
.route('/')
.get(protect, getAllBoys)
.post(createBoy);

router
.route('/:id')
.get(getBoy)
.patch(updateBoy)
.delete(protect, restrictTo('admin'),deleteBoy);

module.exports = router;