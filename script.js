// Question 1 : Hoisting with var and function scope
console.log(a);
var a = 10;
function foo() {
 console.log(a);
 var a = 20;
}
foo();
console.log(a);

//Question 2 : for loop with setTimeout
for (var i = 0; i < 5; i++) {
 setTimeout(function() {
   console.log(i);
 }, 1000);
}
//option 1 : Use let
for (let i = 0; i < 5; i++) {
 setTimeout(() => console.log(i), 1000);
}
//option 2 : Use IIFE
for (var i = 0; i < 5; i++) {
 (function(j) {
   setTimeout(() => console.log(j), 1000);
 })(i);
}

//Question 3 : Event loop & setTimeout with 0ms
console.log('Start');
setTimeout(() => {
 console.log('Middle');
}, 0);
console.log('End');

//Quetion 4 : Array length & sparse arrays
let arr = [1, 2, 3];
arr[10] = 5;
console.log(arr.length);
console.log(arr);

//Question 5 : Weird type coercion
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0 in some engines, or "[object Object]" depending on how JS interprets `{}` as block

//Question 6 : Object comparison
let objA = { foo: 'bar' };
let objB = { foo: 'bar' };

console.log(objA == objB);   // false
console.log(objA === objB);  // false

//Question 7 : Function expression hoisting
foo();
var foo = function() {
 console.log('Function expression');
};


//Question 8 : Destructuring with defaults
const person = {
 name: 'Alice',
 age: 25,
 address: { city: 'Wonderland' }
};
const { name, address: { city }, country = 'Unknown' } = person;
console.log(name, city, country);

//Question 9 : Promise execution
const promise = new Promise((resolve, reject) => {
 console.log('Promise started');
 resolve('Success');
});
promise.then(res => {
 console.log(res);
});
console.log('Promise created');


//Question 10 : Nested function & hoisting
(function() {
 var x = 10;
 (function() {
   console.log(x);
   var x = 20;
   console.log(x);
 })();
})();
