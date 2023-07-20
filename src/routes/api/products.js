const router = require('express').Router();

const ProductsController = require('../../controllers/products.controller');

router.get('/', ProductsController.getAllProducts);
router.get('/department/:department', ProductsController.getByDepartment);
router.post('/', ProductsController.createProduct);
router.put('/:productId', ProductsController.updateProduct);
router.delete('/:productId', ProductsController.deleteProduct);

module.exports = router;