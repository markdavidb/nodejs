/**
 * @file models/user.js
 * @description Defines the User schema and exports the Mongoose model.
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date
    },
    marital_status: {
        type: String
    },
    // Field for calculating the user's total costs
    totalCosts: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('User', userSchema);
