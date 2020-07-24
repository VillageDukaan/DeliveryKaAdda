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

const router = express.Router();

router.route('/boy-stats').get(getBoyStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);



router.route('/').get(getAllBoys).post(createBoy);
router.route('/:id').get(getBoy).patch(updateBoy).delete(deleteBoy);

module.exports = router;