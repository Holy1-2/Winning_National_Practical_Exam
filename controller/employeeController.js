const Employee = require('../models/Employee');
const  employee = require('../models/Employee');


exports.createEmployee = async(req ,res)=>{
try{
const{
 employeeNumber,
 firstName,
            lastName,
            position,
            address,
            telephone,
            gender,
            hiredDate,
            department

}=req.body;

const newEmployee = new Employee({
 employeeNumber,
 firstName,
            lastName,
            position,
            address,
            telephone,
            gender,
            hiredDate,
            department
});

const savedEmployee = await newEmployee.save();
res.json(savedEmployee);

}catch(err){
res.status(400).json({message:err.message});
}

}

exports.getallEmployees = async(req ,res)=>{

    try{
const employees = await Employee.find().populate('department');
res.json(employees)

    }catch(err){

res.status(500).json({message: err.message})

    }



}
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        
        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.json({ message: "Employee deleted successfully" });
    } catch (err) {
        // Fixed: changed error:message.err to err.message
        res.status(500).json({ message: "Delete failed, please try again later", error: err.message });
    }
};;
