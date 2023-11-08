//array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);

//array to string
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let text = fruit.toString();
console.log(text);

//pop remove the last element of an array
const abc = ["Banana", "Orange", "Apple", "Mango"];
abc.pop();
console.log(abc);

//push
const xyz = ["Banana", "Orange", "Apple", "Mango"];
xyz.push("Kiwi");
console.log(xyz);

//array shift remove first item of an array
const mvc = ["Banana", "Orange", "Apple", "Mango"];
mvc.shift();
console.log(mvc);

//unshift add new item
const uwx = ["Banana", "Orange", "Apple", "Mango"];
uwx.unshift("Lemon", "Pineapple");
console.log(uwx);

//join return array as an string
const vnc = ["Banana", "Orange", "Apple", "Mango"];
let tex = vnc.join();
console.log(text);

//concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);
console.log(children);

//flat
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//splice add array element
const uv = ["Banana", "Orange", "Apple", "Mango"];
uv.splice(2, 0, "Lemon", "Kiwi");
console.log(uv);

//slice() returns selected array elements as a new array:
const tvs = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = tvs.slice(1, 3);
console.log(citrus);

//sort
const jkl = ["Banana", "Orange", "Apple", "Mango"];
jkl.sort();
console.log(jkl);