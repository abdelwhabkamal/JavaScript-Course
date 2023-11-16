var human={
    name:"Abdelwahab",
    age:23,
    eat:function(){
        console.log("Eating .....");
    },
    drink:function(){
        console.log("Drinking ......");
    }
}
console.log(human);
console.log(human.name);
console.log(human["age"]);
human.eat();
human.drink();
