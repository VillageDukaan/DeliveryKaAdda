const express = require('express');
const {
    getAllBoys,
    createBoy,
    getBoy,
    updateBoy,
    deleteBoy,
    getBoyStats
} = require('./../controllers/boyController');

const router = express.Router();

router.route('/boy-stats').get(getBoyStats)



router.route('/').get(getAllBoys).post(createBoy);
router.route('/:id').get(getBoy).patch(updateBoy).delete(deleteBoy);

module.exports = router;