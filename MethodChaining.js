// Call Method after Method.

var user="abdelwahab";
/*
let Firstletter=user.charAt(0);
Firstletter=Firstletter.toUpperCase();
user=Firstletter+user.slice(1);
*/
user=user.charAt(0).toUpperCase().concat(user.slice(1));

//  Break: to break loop , Continue: break for specific loop

for(let i=0;i<5;i++){
    if(i==4){
        break;
    }
    if(i==2){
        continue;
    }
    console.log(i);
}