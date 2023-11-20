console.log('-- Arrays --');

// ass1
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
fruits.pop();
fruits.reverse();
console.log(fruits);

// ass2
const array1 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Index of Apple is : " + array1.indexOf("Apple"));

// ass3
if(array1.includes("Chiku")){
    console.log('Yes');
}else{
    console.log('No');
}

// ass4
const array2 = array1.map(myFunction);
function myFunction(value,index){
    return "Fruit " + index + " = " + value;
}
console.log(array2);

// ass5
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.concat(6);
console.log("New Array: " + newArray);

// ass6
const names = ["john", "mary", "alice"];
const nameNew = names.map(function(namee){
    return namee.charAt(0).toUpperCase() + namee.slice(1);
});
console.log(nameNew);

// ass7
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evennumbers = numbers.filter(function(value){
    if(value%2 == 0){
        return value; 
    }
});
console.log("Even Numbers : " + evennumbers);

// ass8
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 98 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 92 },
    { name: 'Eve', score: 78 },
  ];

  students.sort((a, b) => a.score - b.score);

  console.log(students);

//   Explaination: This comparison will result in a negative number if a has a lower score than b, a positive number if a has a higher score than b, and 0 if their scores are the same.