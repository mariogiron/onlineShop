const Product = require('../models/product.model');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

const getByDepartment = async (req, res) => {
    const { department } = req.params;

    try {
        const products = await Product.sameDepartment(department);
        res.json(products);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
};

const updateProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndRemove(productId);
        res.json(deletedProduct);
        // res.json({ success: 'Documento borrado con éxito' });
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct, getByDepartment }