/**
 * @file controllers/userController.js
 * @description Controller for fetching user details by ID.
 */

const User = require('../models/user');

/**
 * Get user details by ID.
 * Endpoint: GET /api/users/:userId
 * Returns: first_name, last_name, id, total (total costs)
 *
 * @param {Object} req - Request object (expects userId as a parameter)
 * @param {Object} res - Response object
 */
exports.getUserDetails = async (req, res) => {
    try {
        const userId = Number(req.params.userId);

        const user = await User.findOne({ id: userId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Prepare the response data
        const result = {
            first_name: user.first_name,
            last_name: user.last_name,
            id: user.id,
            total: user.totalCosts
        };

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: 'Server error', message: error.message });
    }
};
