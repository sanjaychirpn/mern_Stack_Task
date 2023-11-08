
var myValue = 10 ; // HTML SCRIPT => BASIC.JS // VAR variable access entire in html file    -> Globally Scoped
// No restriction that you should initialize the value
// No restriction on re-declaration
// Value can be change

var myValue = 0;

let myValue2 ;  // Block Scope and Function Scope
// No restriction that you should initialize the value
// YES restriction on re-declaration in the same block
// value can be change

const myValue3 = ""; // Block Scope and Function Scope
// Its a restriction that you should initialize the value
// Yes restriction on re-declaration in the same block
// value can't be change

// Exception -> Array and Objects 

// Array has 3 elements
// Array => Primary Memory Address
// arr[0] store at address 1100


const arr = [0,2,4];
console.log(arr)
arr[0]=1
console.log(arr)


const obj = { 
    name : "lalita"
}
console.log(obj)
obj.name = "khushi"
console.log(obj)

//Function Scope
function mywork(){
    //Function scope
    const myValue3 = "";
    let myValue2 ; 

    // Function scope end
}


//IF , LOOPs, Switch 
if(true){
//Block Scope start
let myVal;


//Block Scope End
}



// Data types
// string
// number
// boolean
// undefined 
// null


// var mydata;
// if(mydata == undefined){

// }
// if( mydata ==  null){

// }
// if( mydata == ""){

// }

var userObject = {
    name : [0,0,0],
    "2xl" : "1536",
    getFullName : (e)=>{
        return e.name
    }
}

// var userObject = ""

// key : value ( different data type) string | number | array | object | function
// console.log(userObject.getFullName)


// typeOf operator
console.log(typeof userObject)
if(typeof userObject === "object"){
    userObject.name = "chirag"
    console.log(userObject)
}else{
    console.log("sorry its not object")
}
