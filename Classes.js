class car{
    constructor(model,color,year){
        //use this to make parmeters accessible in your class
        this.model=model;
        this.color=color;
        this.year=year;
        console.log("Engine Starting ......",model)
    }

drive(){
    console.log("Drive Your "+this.model+" Car!");
}
static stop(){ 
    console.log("Stop Your Car!");
}
print(){return this}; // this is refernce of object 
}
// everytime you create instance of class you call constructor of its class auto 
let car1=new car("BMW","Black",2010);
car.stop(); // static called from class immediately dont need for instance from class
