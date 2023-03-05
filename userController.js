const Person=require('./userSchema')

const getPerson=async(req,res)=>{

    const Persons=await Person.find({name:req.body.name})
    res.send(Persons)
}

const getOnePerson=async(req,res)=>{

    const Persons=await Person.findOne({name:req.body.name})
    res.send(Persons)
}

const getIDPerson=async(req,res)=>{

    const Persons=await Person.findById({_id:req.body.ID})
    res.send(Persons)
}

const updatePerson=async(req,res)=>{

    const Persons=await Person.findById({_id:req.body.ID})
    Persons.favoriteFoods.push(req.body.favoriteFoods)
    res.send(Persons)
}

const findAndUpdate=async (req,res)=>{

    const Persons=await Person.findOneAndUpdate({name:req.body.name},{age:20},{new: true})
    res.send(Persons)
}

const findAndRemove=async (req,res)=>{

    const Persons=await Person.findByIdAndRemove({ID:req.body.ID},{age:20},{new: true})
    res.send(Persons)
}

const deleteMany=async(req,res)=>{

    const Persons=await Person.deleteMany({name:"Mary"})
    res.send(Persons)
}


const addPerson=async(req,res)=>{
    
    User.create({
        name:req.body.name, 
        age:req.body.age,
        favoriteFoods:req.body.favoriteFoods,
                })
    res.send("user added")

}

const  getburritos=async(req,res)=>{
    try{
        await Person.find({favoriteFoods:"burriots"})
        .sort({name:"desc"})
        .limit(2)
        .select("-age")
        .exec()}
        catch(error){console.log(error)}
    }


module.exports=({getPerson,addPerson,getOnePerson,getIDPerson,updatePerson,findAndUpdate,findAndRemove,deleteMany,getburritos})