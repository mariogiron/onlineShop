const router = require('express').Router();

const UsersController = require('../../controllers/users.controller');

router.get('/', UsersController.getAllUsers);
router.post('/', UsersController.createUser);
router.put('/add_product/:userId', UsersController.addProduct);

module.exports = router;