/**
 * @file routes/costRoute.js
 * @description Routes for handling costs – here we define the routes for adding a cost and getting a monthly report.
 */

const express = require('express');
const router = express.Router();
const costController = require('../controllers/costController');

// Route to add a new cost: POST /api/add
router.post('/add', costController.addCost);

// Route to get the monthly report: GET /api/report
router.get('/report', costController.getMonthlyReport);

module.exports = router;
