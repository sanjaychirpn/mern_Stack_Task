//ans1
//delete first element using pop method
const newarr = ["Banana", "Orange", "Apple", "Mango"];
const delfirstele= newarr.slice(1);
console.log(delfirstele);

//ans2
// find index of apple
const Array = ["Banana", "Orange", "Apple", "Mango"];
const index = Array.indexOf("Apple");
console.log(index);

//find chiku
const fruit = ["Banana", "Orange", "Apple", "Mango"];
const find="chiku";
 
if(fruit.includes(find))
{
  console.log("yes");
}
else
{
  console.log("no");
}
//Use map() append Fruit 1 - [element Value],
const fruits = new Map([
    ["apples", 1],
    ["bananas", 2],
    ["oranges", 3],
    ["mango", 4]
  ]);
  
  let text = "";
  fruits.forEach (function(value, key) {
    text += key + ' = ' + value 
  })
  console.log(text);

  //ans3
  //add an element to the end of an array without using the push() method
  const originalArray = [1, 2, 3, 4, 5];
  originalArray.unshift(6);
  console.log(originalArray);

  //ans4
  // Use the map() method to capitalize the first letter of each string in an array of names.
  const names = ["john", "mary", "alice"];
  names.forEach((word, index) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
  
    names[index] = firstLetter + rest;
  });

  console.log(names);

//ans 5
//Filter Even Numbers: Given an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

//write a JavaScript function that uses the filter() method to create a new array containing 
// only the even numbers from the original array.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = num.filter(checkeven);

function checkeven(num) {
    return num >= 6;
  }
  console.log(checkeven);

//ans 6
// Create an array of student objects where each student has a name and score property. 
//Write a JavaScript function that uses the sort() method to sort the array in descending order of scores
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 98 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 92 },
    { name: 'Eve', score: 78 },
  ];
  students.sort(function
    (a, b){return b-a});
  console.log(students);

// const points = [
// 40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
// console.log(points);
