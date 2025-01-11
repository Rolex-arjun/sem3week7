const Food = require('../models/Food');

const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFood = async (req, res) => {
  try {
    const { name, price } = req.body;
    const food = new Food({ name, price });
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllFood, addFood };
