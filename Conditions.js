//                     IF Else
/*
var age=window.prompt("Enter Your Age");

if(age>=18){
    console.log("Allowed");
}else if(age<18 && age>5){
    console.log("Go Away");
}else {
    console.log("Check if you entered your age right!");
}
*/
//         Switch Case
var Grade=window.prompt("Enter Your Grade");

switch(Grade){
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Very Good!");
        break;
    case "C":
        console.log("Good!");
        break;
    case "D":
        console.log("Acceptable!");
        break;
    case "F":
        console.log("Fail!");
        break;
    default:
        console.log("Check if you entered your grade right!!");
        break;

}