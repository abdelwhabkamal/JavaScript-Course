var arr=["Abdelwahab","Kamal","Mohamed","Akram"];
/*
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
*/

/*
for(let i in arr){
    console.log(i);
}
*/

// Using Nested Loops
var symbol="*";
const rows=window.prompt("Enter Number of Rows");
const Columns=window.prompt("Enter Number of Columns");
document.getElementById("Rectangle").innerHTML ="";

for(let i=0; i<rows;i++){
    for(let j=0;j<Columns;j++){
        document.getElementById("Rectangle").innerHTML +=symbol;
    }
    document.getElementById("Rectangle").innerHTML+="<br>";
}