/**
 * @file controllers/aboutController.js
 * @description Controller for the "About" page – returns information about the team members.
 */

// List of team members – you can add more members as needed
const teamMembers = [
    { first_name: 'Ofek', last_name: 'Vaknin' },
    { first_name: 'Mark', last_name: 'Boyko' }
];

/**
 * Returns a JSON response with the team members' details.
 * Endpoint: GET /api/about
 *
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 */
exports.getAboutInfo = async (req, res) => {
    try {
        return res.json(teamMembers);
    } catch (error) {
        return res.status(500).json({ error: 'Server error', message: error.message });
    }
};
