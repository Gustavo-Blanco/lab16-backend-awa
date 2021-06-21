const { Router } = require('express');
const router = Router();
const userController = require('../controllers/userController');

router.post('/authenticate',userController.auth);

module.exports = router;