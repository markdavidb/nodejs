/**
 * @file routes/userRoute.js
 * @description נתיבים לטיפול במשתמש – כאן מוגדר נתיב לקבלת פרטי משתמש לפי מזהה.
 */

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// נתיב לקבלת פרטי משתמש: GET /api/users/:userId
router.get('/:userId', userController.getUserDetails);

module.exports = router;
