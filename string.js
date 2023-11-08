//Declare a string variable named greeting and assign it the value "Hello, World!
var greeting = "Hello, world!"
console.log(greeting);

//Concatenate the following two strings and display the result: "JavaScript is" and " awesome!"
let text1 = "JavaScript is ";
let text2 = "awesome!";
let result = text1.concat(text2);
console.log(result);

// String Length: Calculate and display the length of the string "Programming is fun!".
var txt = "Programming is fun!";
var len = txt.length;
console.log(len);

// String Indexing: Access and display the character 'P' from the string "JavaScript"
let text = "JavaScript";
let resul = text.indexOf("p");
console.log(resul);

//Compare the strings "apple" and "Apple" using both === and ==. Explain the results.
const string1 = "apple";
const string2 = "Apple";
console.log(string1==string2);
console.log(string1 === string2);

// String Reversal: Write a JavaScript function to reverse the string "racecar" and display the result.
function reverseString(str) {
    if (str.length <= 1) {
      return str;
    }
    return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
  }
  
  let reversed = reverseString('hello');
  console.log(reversed); 

  // String Searching: Check if the word "banana" exists in the string "I love eating bananas." Display whether it's found or not.
  let txt = "I love eating bananas";
  let position = txt.search("bananas");
  console.log(position);

// String Substrings: Create a variable called sentence with the value "The quick brown fox". Extract and display the word "quick" from it.
  let sentence = "The quick brown fox";
  let display = sentence.substring(4,9);
  console.log(display);

  // String Uppercase: Convert the string "lowercase" to all uppercase letters and display the result
  let lower = "hello world!";
  let uper = lower.toUpperCase();
  console.log(uper);

// String Template Literal: Create a template literal that incorporates the variables name and age to display a message like "My name is John, and I am 30 years old." where name is "John" and age is 30.
let firstName = "my name is ";
let lastName = 30;

let template = `${firstName}"john", age is ${lastName}`;
console.log(template);


