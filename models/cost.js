/**
 * @file models/cost.js
 * @description Defines the Cost schema and exports the Mongoose model.
 */

const mongoose = require('mongoose');

const costSchema = new mongoose.Schema({
    userid: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Allowed categories: food, health, housing, sport, education
    category: {
        type: String,
        required: true,
        enum: ['food', 'health', 'housing', 'sport', 'education']
    },
    sum: {
        type: Number,
        required: true
    },
    // Cost creation date – if not provided, defaults to the current date and time
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Cost', costSchema);
