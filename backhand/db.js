const mongoose = require("mongoose")
const mongooseURl = "mongodb+srv://huzaifa121:huzaifa121@cluster0.pcgczbl.mongodb.net/inotebook?retryWrites=true&w=majority"


const connection={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
const connectToMongo=()=>{

    mongoose.connect(mongooseURl,connection)
     .then(()=>{
        console.info('connnected to db')
     })
     .catch((e)=>{
        console.log('error',e)
     })
}

module.exports=connectToMongo;