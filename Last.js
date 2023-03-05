const Person = require("./userSchema");


async function last(){

    await Person.find(e=>e.favoriteFoods=="burriots")
    .sort({name:"desc"})
    .limit(2)
    .select("-age")
    .exec((err,data)=>{
        if(err)
        done(err);
        done(null, data);
    })
}

module.exports=last