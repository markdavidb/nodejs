/**
 * @file routes/aboutRoute.js
 * @description Route for the "About" page – returns details about the team members.
 */

const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Route to get team members information: GET /api/about
router.get('/', aboutController.getAboutInfo);

module.exports = router;
