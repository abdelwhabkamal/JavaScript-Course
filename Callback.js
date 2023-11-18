let message;
function SetMessage(txt,callback){
    message=txt;
    callback(message);
    return message;
}
function PrintMessage(out){
    console.log(out);
}
function Display(Output){
    document.getElementById("H2").innerHTML=Output;
}
PrintMessage(SetMessage("Hello",Display));