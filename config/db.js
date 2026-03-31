const mongoose = require('mongoose')

const connectDb = async () => {

try{
const conn = await mongoose.connect(process.env.MONGO_URL)
console.log("Mongo db connected succeful ");

}

catch(error)
{
console.error(`Error connecting ${error.message}`)
}


};

module.exports = connectDb ;