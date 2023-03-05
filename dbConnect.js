const mongoose=require('mongoose')

const dbConnect =async ()=>{
    try{
    mongoose.connect('mongodb://0.0.0.0:27017/CheckDatabase')
    console.log('Connected')}
    catch(error){
        console.log(error)
    }

}

module.exports=dbConnect