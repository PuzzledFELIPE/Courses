// JavaScript Challenges - Building on Variables
// Instructions: Read each challenge, write your solution code below the comments,
// and test with console.log(). Run with: node javascript/challenges.js or in browser console.

// Challenge 1: Variable Swap (Easy)
// Swap values of two variables without using a third variable.
let a = 5;
let b = 10;
// TODO: Swap a and b
[a, b] = [b, a]; // Using array destructuring to swap
console.log(a, b); // Expected: 10 5

// Challenge 2: String Manipulation (Easy)
// Create a greeting message using template literals.
const userName = 'Felipe';
const age = 25;
// TODO: Create greeting like "Hello Felipe, you are 25 years old!"
const greeting = `Hello ${userName}, you are ${age} years old!`
console.log('Challenge 2:', greeting);

// Challenge 3: Array Sum (Medium)
// Calculate sum of all numbers in an array.
const numbers = [1, 2, 3, 4, 5];
let i = 0
let result = 0
// TODO: Compute sum
for (i in numbers){
    result = result + numbers[i]
}
console.log('Challenge 3:', result); // Expected: 15

// Challenge 4: Object Update (Medium)
// Update object properties dynamically.
const person = { name: 'Alice', age: 31, city: "NYC" };
// TODO: Add 'city: "NYC"' and change age to 31
console.log('Challenge 4:', person);

// Challenge 5: Function Parameter Default (Medium)
// Write a function that adds two numbers, with default value 0 for second param.
function add(x, y = 0) {
   //TODO: Return sum
   sum = x + y
   return sum
}
// Test:
console.log('Challenge 5:', add(5)); // Expected: 5
console.log('Challenge 5:', add(3, 4)); // Expected: 7

// Challenge 6: Scope Test (Medium)
// Demonstrate let vs var hoisting/block scope.
if (true) {
  var globalVar = 'global';
  let blockLet = 'block';
}
console.log('Challenge 6a:', globalVar); // "global"
console.log('Challenge 6b:', typeof blockLet); // "undefined"
// TODO: Explain why in comment, or modify to log blockLet correctly

// Challenge 7: Conditional Assignment (Harder)
// Assign variable based on condition.
const score = 85;
let grade;

if (score >= 90){
    grade = "A"
}
if (score >= 80){
    grade = "B"
}
else{
    grade = "C"
}
//TODO: grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log('Challenge 7:', grade); // Expected: "B"

// Challenge 8: Multi-Variable Template (Harder)
// Generate report using multiple variables.
const product = 'Laptop';
const price = 999.99;
const quantity = 3;
const taxRate = 0.1;
// TODO: total = (price * quantity * (1 + taxRate)).toFixed(2)
let total = (price * quantity * (1 + taxRate)).toFixed(2)
message = `${quantity} ${product}(s) total: $${total}`
console.log('Challenge 8:', message);

// Challenge 9: Array Filter (Medium)
// Create a new array with only even numbers.
const values = [3, 8, 11, 14, 20, 27];
let evenValues = [];
let j = 0

for (i in values){
    if (values[i] % 2 == 0){
        evenValues.push(values[i])
    }
}
// TODO: Use filter() to keep only even numbers
console.log('Challenge 9:', evenValues); // Expected: [8, 14, 20]

// Challenge 10: String Uppercase (Easy)
// Convert a string to uppercase.
const city = 'lisbon';
let upperCity = city.toUpperCase();
// TODO: Transform city into uppercase
console.log('Challenge 10:', upperCity); // Expected: "LISBON"

// Challenge 11: Object Property Check (Medium)
// Check if an object has a specific property.
const book = { title: 'Clean Code', author: 'Robert C. Martin'};
const hasYear = book.hasOwnProperty('year');
// TODO: Set hasYear to true if book has a year property
console.log('Challenge 11:', hasYear); // Expected: false

// Challenge 12: Loop Countdown (Easy)
// Print numbers from 5 down to 1.
let countdown = [];
for (h = 5; h >= 1; h--){
    countdown.push(h)
}
// TODO: Fill countdown with [5, 4, 3, 2, 1]
console.log('Challenge 12:', countdown);

// Challenge 13: Function Return Value (Medium)
// Write a function that returns the square of a number.
function square(number) {
    // TODO: Return number multiplied by itself
    return number * number
}
console.log('Challenge 13:', square(8)); // Expected: 36

// Challenge 14: Array Join (Easy)
// Combine array items into a single sentence.
const words = ['JavaScript', 'is', 'fun'];
let sentence = '';
// TODO: Join words with spaces
sentence = words.join(" ")
console.log('Challenge 14:', sentence); // Expected: "JavaScript is fun"

// Challenge 15: Conditional Message (Medium)
// Create a message based on whether a user is logged in.
const isLoggedIn = false;
let statusMessage = '';

if (isLoggedIn){
    statusMessage = "Welcome back!"
}
else{
    statusMessage = "Please log in."
}
// TODO: Set statusMessage to 'Welcome back!' or 'Please log in.'
console.log('Challenge 15:', statusMessage); // Expected: "Welcome back!"

// Challenge 16: Array Find (Medium)
// Find the first number greater than 10.
const digits = [4, 7, 12, 2, 18];
let firstGreaterThanTen = digits.find(num => num > 10);
//for (l in digits){
    //if (digits[l] >10){
        //firstGreaterThanTen = digits[l];
        //break
    //}
//}
// TODO: Use find() to get the first number greater than 10
console.log('Challenge 16:', firstGreaterThanTen); // Expected: 12

// Challenge 17: Basic Math (Easy)
// Calculate the area of a rectangle.
const width = 8;
const height = 5;

function areaOfRectangle(width, height){
    return width * height
}
let area = areaOfRectangle(width, height);
// TODO: Compute width times height
console.log('Challenge 17:', area); // Expected: 40

// Challenge 18: Multiple Conditions (Harder)
// Assign a label based on temperature.
const temperature = 22;
let weatherLabel;

if (temperature >= 30){
    weatherLabel = "hot"
}
if (temperature >= 20){
    weatherLabel = "warm"
}else{
    weatherLabel = "cold"
}
// TODO: Set weatherLabel to 'hot' if temperature >= 30, 'warm' if >= 20, otherwise 'cold'
console.log('Challenge 18:', weatherLabel); // Expected: "warm"

console.log(5==="5"); // Expected: false


