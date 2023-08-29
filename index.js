let result=document.getElementById("inputext");
 
let calculate=(number)=>{
    result.value+=number;
 }

let Result=()=>{
    result.value=eval(result.value)
  
}




function clr(){
     result.value= " ";
}

function del(){
       result.value=result.value.slice(0,-1); 
}

function dot(){
    result.value= ".";
}

function dobule(){
    result.value= " 00";
}
