const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({

employee :{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Employee',
    required : true
},

totalDeduction:{
type:Number,
default:0

},
netSalary:{
    type:Number,
    required:true
},
month:{

    type:String,
    require:true
},
},{timestamp:true});

module.export = mongoose.model("Salary",salarySchema);