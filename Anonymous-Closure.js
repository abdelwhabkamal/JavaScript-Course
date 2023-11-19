//              Anonymous
// can't be call later but you can store it in variable
(function () {
    document.getElementById("H2").innerHTML="12345";
})()

//             Closure
//gives you access to an outer function's variables and parameters from an inner function
let score=function(){
let points=0;
return function(){
    return points+=1;
}
}();
console.log(score()); // 1
console.log(score()); // 2
console.log(score()); // 3
