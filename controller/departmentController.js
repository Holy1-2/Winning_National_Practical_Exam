const Department = require('../models/Department');

exports.createDepartment = async(req,res)=>{
try{
const{
departmentCode,
departmentName,
grossSalary

}= req.body;

const newDept = new Department({
    departmentCode,
departmentName,
grossSalary

});

const savedDept =  await newDept.save();
res.status(201).json(savedDept);

}catch(err){

res.status(400).json({message: err.message});
}

};

exports.getallDepartments = async(req ,res)=>{

try{

    const departments = await Department.find();
    res.json(departments)
}catch(err){

res.status(500).json({message:err.message});

}

}

exports.deleteDepartment = async (req,res) => {
    try{
const deletedDepartment = await Department.findByIdAndDelete(req.params.id)
if(!deletedDepartment){
    res.status(404).json({message:"No employee matching that id"})
}
res.json({message:"Department deleted succefully"})
    }catch(err){
        res.status(500).json({message:"Deleting department failed"})
    }
}