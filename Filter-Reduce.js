//             Filter
/*
let students=[18,12,21,22,15,19,20];
let PlsE=students.filter(age=>age>=18);
console.log(students);
console.log(PlsE);
*/

//             Reduce

let Letters=["H","E","L","L","O"," ","W","O","R","L","D"];
let word=Letters.reduce(function(Pval,Cval){return Pval+Cval})
let word2=Letters.reduceRight(function(Pval,Cval){return Pval+Cval})

console.log(word);
console.log(word2);
