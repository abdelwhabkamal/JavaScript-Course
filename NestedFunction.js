// Functions in JS Can be stored in variables
function Login(){
    let user="Abdelwahab";
    function getUSer(user){ // Child function cant be called out parent scoop 
        console.log("Hi",user);
    }
    getUSer(user);
}
Login();