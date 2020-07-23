const express = require('express');
const {
    getAllBoys,
    createBoy,
    getBoy,
    updateBoy,
    deleteBoy
} = require('./../controllers/boyController');

const router = express.Router();

// router.param('id', checkID)

router.route('/').get(getAllBoys).post(createBoy);
router.route('/:id').get(getBoy).patch(updateBoy).delete(deleteBoy);

module.exports = router;