var cars=["Citroen","Mercedes","BMW"];
console.log(cars);

//Print Elements of Cars Array
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars=cars.sort();
console.log("Cars after Sorting:",cars);

cars=cars.reverse();
console.log("Cars after Reversing:",cars);

cars.push("Wolks");
console.log(cars[3]);

console.log("Length of Cars Array:",cars.length);

cars.pop();
console.log("Length of Cars Array After Pop:",cars.length);
