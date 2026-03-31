const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  
    employeeNumber: { 
        type: String, 
        required: true, 
        unique: true 
    },
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    position: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String 
    },
    telephone: { 
        type: String 
    },
    gender: { 
        type: String, 
        enum: ['Male', 'Female', 'Other'] // Restricts to these values
    },
    hiredDate: { 
        type: Date, 
        default: Date.now 
    },
    // Linking to the Department Model
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department', // This connects to the Department model
        required: true
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('Employee', employeeSchema)