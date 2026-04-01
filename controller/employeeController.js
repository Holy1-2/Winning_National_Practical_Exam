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
res.status(401).json({message:err.message});
}

}

exports.getallEmployees = async(req ,res)=>{

    try{
const employees = await Employee.find();
res.json(employees)

    }catch(err){

res.status(500).json({message: err.message})

    }


};