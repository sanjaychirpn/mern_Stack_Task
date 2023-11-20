console.log('Strings');

// ass1
var greetings = "Hello, World!";
console.log(greetings);

// ass2
var str1 = "JavaScript is";
var str2 = "awesome!";
var result1 = str1 + " " + str2;
var result2 = str1.concat(" ",str2);
console.log(result1);
console.log(result2);

// ass3
let strlen = "Programming is fun!".length;
console.log(strlen);

// ass4
let variable = "JavaScript".indexOf('p');
let variable2 = "JavaScript";
console.log(variable);
console.log(variable2[8]);

// ass5
let a1 = "Apple";
let a2 = "apple";

console.log("== Comparision");
if(a1==a2){
    console.log(true);
}else{
    console.log(false);
}

console.log("=== Comparision");
if(a1===a2){
    console.log(true);
}else{
    console.log(false);
}

// result for both is false because both == and === because of case-sensitivity.Since "apple" and "Apple" have different letter casings, they are not considered equal in JavaScript.

// ass6
function reverseString(input){
    var inputString = input.split("");
    // Reverse the array
    inputString.reverse();
    let newString = inputString.join('');
    return newString;
}

var originalString = "racecar";
var newString = reverseString(originalString);

console.log("Original : " + originalString);
console.log("New : " + newString);

// ass7
var str3 = "I love eating bananas.";
if(str3.includes('banana')){
    console.log('Found Banana!');
}else{
    console.log('Banana not Found!');
}

// ass8
var sentence = "The quick brown fox";
var newres = sentence.substring(4,9);
console.log("extracted string: " + newres);

// ass9
console.log("Uppercase: " + "lowercase".toUpperCase());

//ass10
var fname = "Jhon";
var age = 30;
console.log(`My name is ${fname}, and I am ${age} years old.`);