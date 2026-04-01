const Salary = require('../models/Salary');

exports.createSalary = async (req, res) => {
    try {
        const { grossSalary, employee, totalDeduction, month } = req.body;
        const netSalary = grossSalary - totalDeduction;

        const newSalary = new Salary({
            grossSalary,
            employee,
            totalDeduction,
            month,
            netSalary
        });

        const savedSalary = await newSalary.save(); 
        res.status(201).json(savedSalary);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getallsalaries = async (req, res) => {
    try {
        // Use 'Salary' (the variable name you defined at the top)
        const salaries = await Salary.find().populate('employee');
        res.json(salaries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};