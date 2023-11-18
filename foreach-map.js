

let total=0;

let arr=[10,12,24,45];


//                   foreach()
// recieve function with array or index or element or all
/*
arr.forEach(function(element,index,array)
{
    total+=element;
    console.log(index,array);
})
console.log(total);
*/

//                   map()
// Return new array with calculations in their elements
newarr=arr.map(element=>total+=element);
console.log(arr)
console.log(newarr)
