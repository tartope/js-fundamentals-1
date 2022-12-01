/*
//Values and Variables

let js = 'amazings';
console.log(40 + 8 + 23 -10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';  //declaring a variable

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27

let person = 'Jonas';
const PI = 3.1415;  //value will not change

let myFirstJob = 'Coder';  //more descriptive variable names and good practice
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';  //not descriptive variable names or good practice
let job2 = 'Teacher';

console.log(myFirstJob);
////////////////////////////////////////////////////////////////

//Data Types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//Using 'typeof' to deterine data type:
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

//Using dynamic typing:
javaScriptIsFun = 'Yes!'
console.log(typeof javaScriptIsFun);

//Describing 'undefined' data type:
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
////////////////////////////////////////////////////////////////


//Using let, const, and var:

let age = 30;
age = 31;

//Cannot re-assign value with const
const birthYear = 1991;
// birthYear = 1990;

//Cannot leave undefined with const
// const job;

var job = 'programmer';
job = 'teacher';

//Not mandatory to declare a variable; still works with JS but not a good idea.
lastName = 'Artope';
console.log(lastName);
/////////////////////////////////////////////////////////////////////////////////////


//Basic Operators:

//Math operators:
//Subtraction (-)
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

//Multiplication, division, and exponentiation (*, /, **)
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);  //'**' is exponentiation <-- 2 to the power of 3 or 2^3

//Addition (can add numbers or concatenate strings (+))
const firstName = 'Tunisia';
const lastName = 'Artope';
const space = ' ';
console.log(firstName + ' ' + lastName);
console.log(firstName + space + lastName);
console.log(`${firstName} ${lastName}`);

//Assignment operators (=, +=, *=, ++, --, etc)
let x = 10 + 5;  //=> 15
x += 10;  //x = x + 10  //=> 25
x *= 4; //x = x * 4 //=> 100
x++;  //x = x + 1 //=> 101
x--; //x = x -1 //=> 100
x--; //x = x -1 //=> 99
console.log(x);

//Comparison operators (<, > <=, >=)
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
//Why does the two subtraction operators work before the comparison operator?
//Because JS has a well defined order of operations (the order in which operators are executed).
//See MDN table (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

//Order of operation is subtraction from left to right, then evaluate from right to left with assignment operators.
let x, y;
x = y = 25 - 10 - 5;  //x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
////////////////////////////////////////////////////////////////////////////////////

//Coding Challenge #1:

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀

//1.
const weightMark = 78;
const heightMark = 1.69;
const weightMarkNew = 95;
const heightMarkNew = 1.88;
const weightJohn = 92;
const heightJohn = 1.95;
const weightJohnNew = 85;
const heightJohnNew = 1.76;

//2.
const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(bmiMark, bmiJohn);

const bmiMarkNew = weightMarkNew / heightMarkNew ** 2;
const bmiJohnNew = weightJohnNew / heightJohnNew ** 2;
console.log(bmiMarkNew, bmiJohnNew);

//3.
const markHigherBMI = bmiMark > bmiJohn;
const markHigherBMINew = bmiMarkNew > bmiJohnNew;
console.log(markHigherBMI, markHigherBMINew);
///////////////////////////////////////////////////////////////////

//Strings and Template Literals:

const firstName ='Jonas';
const job = 'Teacher';
const birthYear = '1991';
let year = 2037;

//Concatenation
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

//Template Literal
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

//Can use backticks for any regular string:
console.log(`A regular string...`);

//Create multi-line strings ('\n 'means new line):
console.log('String with \n\
multiple \n\
lines.')

//or use backticks:
console.log(`String with
multiple
lines.`);
///////////////////////////////////////////////////////////


//Control structues:

// if/else statements (else block is optional):
const age = 15;

if(age >= 18){
    console.log('Sarah can start driving license. 🚗');
}else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young.  Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;
let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
////////////////////////////////////////////////////////////////

//Coding Challenge #2:

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉 GOOD LUCK 😀

//1.
const weightMark = 78;
const heightMark = 1.69;
const weightMarkNew = 95;
const heightMarkNew = 1.88;
const weightJohn = 92;
const heightJohn = 1.95;
const weightJohnNew = 85;
const heightJohnNew = 1.76;

//2.
const bmiMark = Math.round(weightMark / heightMark ** 2);
const bmiJohn = Math.round(weightJohn / heightJohn ** 2);
// console.log(bmiMark, bmiJohn);

const bmiMarkNew = Math.round(weightMarkNew / heightMarkNew ** 2);
const bmiJohnNew = Math.round(weightJohnNew / heightJohnNew ** 2);
// console.log(bmiMarkNew, bmiJohnNew);

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
}else{
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}
////////////////////////////////////////////////////////////////////////

//Type Conversion and Coercion:

//type conversion:
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  //this function converts strings to numbers; the original value is not converted.
console.log(inputYear + 18);  //199118 (can't add a string and number)
console.log(Number(inputYear) + 18);  //2009

console.log(Number('Jonas'));  //NaN (JS gives this b/c it can't convert a non number)
console.log(typeof NaN); //typeof NaN is still a number, but it's an invalid number.

console.log(String(23));

//type coercion:
console.log('I am ' + 23 + ' years old.');  //I am 23 years old.  (This works b/c of type coercion. In JS, the + operation triggers a coercion of numbers to strings.  Whenever there is an operation between a string and number, the number will be converted to a string.  The same happens with template literals.)
console.log('23' - '10' - 3);  //10  (JS converted the strings to numbers.  The - operation triggers the opposite coercion (strings to numbers).)
console.log('23' + '10' + 3);  //23103 (Everything is concatenated.)
console.log('23' * '2');       //46 (Both are coerced to numbers b/c that's the only way the * operator can work.)
console.log('23' / '2');        //11.5 (The same is true of the / operator.)
////////////////////////////////////////////////////////////////////////

//Truthy and Falsy Values:

//5 falsy values: 0, '' (empty string), undefined, null, NaN; these will become false when converted to a boolean value.  Everything else is truthy.

console.log(Boolean(0));           //false
console.log(Boolean(undefined));  //false
console.log(Boolean('Jonas'));  //true
console.log(Boolean({}));       //true
console.log(Boolean(''));       //false

const money = 100;
//inside the if statement, JS will try to coerce any value into a boolean
if(money){
    console.log("Don't spend it all.");
}else{
    console.log("You should get a job.");
}

//height is undefined because no value was assigned
//let height;
//undefined is a falsy value
// if(height){
//     console.log('Yay! Height is defined.');
// //the else block is executed
// }else{
//     console.log('Height is UNDEFINED');
// }

//height is defined because a value was assigned
// let height = 123;
// //the value is of height is truthy, so the if block is executed
// if(height){
//     console.log('Yay! Height is defined.');
// }else{
//     console.log('Height is UNDEFINED');
// }

//although a value was assigned to height, it is a fasly value
let height = 0;
//the value of height is falsy
if(height){
    console.log('Yay! Height is defined.');
//the else block is executed
}else{
    console.log('Height is UNDEFINED');
}
////////////////////////////////////////////////////////////////

//Equality Operators (== vs. ===):

//equality operator will return a true or false value (boolean value)

//true is the result of '===' if both sides of the operator are equal
//strict equality operator (===). it doesn't perform type coercion. it only returns true when both values are exactly the same
// const age = 18;  //both strict and loose equality operators run the code
const age = '18';   //only loose equality operators run the code
if(age === 18) console.log('You just became an adult :D (strict)');

//loose equality operator (==). it does perform type coerciion.
if(age == 18) console.log('You just became an adult :D (loose)');

//opens a prompt in the window and saves the input to a variable
//const favorite = prompt("What's your favorite number?");
//console.log(favorite);
//console.log(typeof favorite);  //string

//type coercion done and code run due to loose equality operator
// if(favorite == 23) console.log('Cool! 23 is an amazing number! (loose)');    //'23' == 23

//must use Number converter to convert from string to number
const favorite = Number(prompt("What's your favorite number?"));

//type coercion not done and code doesn't run due to strict equality operator
if(favorite === 23){
    console.log('Cool! 23 is an amazing number! (strict)');
}else if(favorite === 7){
    console.log('7 is also a cool number');
}else if(favorite === 9){
    console.log('9 is also a cool number');
}else{
    console.log('Number is not 23 or 7 or 9');
}

//inquality operators: strict (!==) or loose (!=)
if(favorite !== 23) console.log('Why not 23');
////////////////////////////////////////////////////////////////
*/


