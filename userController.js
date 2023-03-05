const Person=require('./userSchema')

const getPerson=async(req,res)=>{

    const Persons=await Person.find(e=>(e.name==req.body.name))
    res.send(Persons)
}

const getOnePerson=async(req,res)=>{

    const Persons=await Person.findOne(e=>(e.name==req.body.name))
    res.send(Persons)
}

const getIDPerson=async(req,res)=>{

    const Persons=await Person.findById(e=>(e._id==req.body.ID))
    res.send(Persons)
}

const updatePerson=async(req,res)=>{

    const Persons=await Person.findById(e=>(e._id==req.body.ID))
    Persons.favoriteFoods.push(req.body.favoriteFoods)
    res.send(Persons)
}

const findAndUpdate=async (personName)=>{

    const Persons=await Person.findOneAndUpdate({name:personName},{age:20},{new: true})
    res.send(Persons)
}

const findAndRemove=async (personID)=>{

    const Persons=await Person.findByIdAndRemove({ID:personID},{age:20},{new: true})
    res.send(Persons)
}

const deleteMany=async()=>{

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


module.exports=({getPerson,addPerson,getOnePerson,getIDPerson,updatePerson,findAndUpdate,findAndRemove,deleteMany})