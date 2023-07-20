const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
    console.log('Pasa por getAllUsers');
    const users = await User.find().populate('cart');
    res.json(users);
}

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

const addProduct = async (req, res) => {
    const { userId } = req.params;

    const user = await User.findById(userId);
    user.cart.push(req.body.productId);

    await user.save();

    res.json(user);
}

module.exports = { createUser, addProduct, getAllUsers }