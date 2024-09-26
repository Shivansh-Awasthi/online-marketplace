const express = require('express');
const { signup, login, logout } = require('../controllers/authControllers.js');
const isAuthenticated = require('../middlewares/auth.js');
const { allUsers, singleUser, editUser } = require('../controllers/userControllers.js');
const router = express.Router();


//  auth routes

router.post('/register', signup);
router.post('/login', login);
router.get('/logout', logout);


router.get('/profile/users', allUsers);
router.get('/profile/:id', singleUser);
router.patch('/profile/edit/:id', editUser);

//  user routes

module.exports = router;