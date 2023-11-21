// Base class
class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    // Method to get information about the car
    getInfo() {
      return `Make: ${this.make}, Model: ${this.model}`;
    }
  }
  
  // Derived class 1
  class Sedan extends Car {
    constructor(make, model, numDoors) {
      super(make, model);
      this.numDoors = numDoors;
    }
  
    // Override the getInfo method
    getInfo() {
      return `${super.getInfo()}, Type: Sedan, Number of Doors: ${this.numDoors}`;
    }
  }
  
  // Derived class 2
  class SUV extends Car {
    constructor(make, model, numSeats) {
      super(make, model);
      this.numSeats = numSeats;
    }
  
    // Override the getInfo method
    getInfo() {
      return `${super.getInfo()}, Type: SUV, Number of Seats: ${this.numSeats}`;
    }
  }
  
  // Example usage
  const sedan = new Sedan("Toyota", "Camry", 4);
  const suv = new SUV("Ford", "Explorer", 7);
  
  console.log(sedan.getInfo()); 
  console.log(suv.getInfo());   