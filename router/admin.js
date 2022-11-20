const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users');

router.get('/add-user', usersController.getAddUser);

router.post('/add-user', usersController.postAddUser);

module.exports = router;