const express = require('express');
const { getAllFood, addFood } = require('../controllers/foodController');
const router = express.Router();

router.get('/foods', getAllFood);
router.post('/foods', addFood);

module.exports = router;
