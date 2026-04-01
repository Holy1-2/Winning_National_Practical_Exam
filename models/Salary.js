const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    grossSalary: { // Added this because your controller uses it
        type: Number,
        required: true
    },
    totalDeduction: {
        type: Number,
        default: 0
    },
    netSalary: {
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Fixed "timestamp" to "timestamps"

module.exports = mongoose.model("Salary", salarySchema); // Fixed .exports