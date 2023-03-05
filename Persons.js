const Person=require('./userSchema')

async function run(){
    const joe = new Person({
    name: "Joe",
    age: 24,
    favoriteFoods: ['Apple', 'Banana']
    });
    joe.save()
};

module.exports=run


