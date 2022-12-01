/*
//Values and Variables

const country = "USA";
const continent = "North America";
let population = 329000000;

console.log(country);
console.log(continent);
console.log(population);
////////////////////////////////////////////////////////////////////////

//Data Types

const country = "USA";
const continent = "North America";
let population = 329000000;

const isIland = false;
let language;
console.log(typeof isIland, typeof population, typeof country, typeof language);

language = 'English';
console.log(typeof isIland, typeof population, typeof country, typeof language);
////////////////////////////////////////////////////////////////////////

//Basic operators

population = population / 2;
console.log(population);
population = population + 1;
console.log(population);

let finlandPopulation = 6000000;
let USAHigherPopulation = population > finlandPopulation;
console.log(USAHigherPopulation);

let averageCountryPopulation = 33000000;
USAHigherPopulation = population < averageCountryPopulation;
console.log(USAHigherPopulation);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);
description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);
////////////////////////////////////////////////////////////////////////

//Taking Decisions: if/else statements

const country = "USA";
const continent = "North America";
let population = 329000000;
let average = (33000000 - population) / 2;

if(population > 33000000){
    console.log(`${country}'s population is above average.`)
}else{
    console.log(`${country}'s population is ${average} million below average.`)
}
////////////////////////////////////////////////////////////////

//Type Conversion and Coercion

'9' - '5';                  //4
'19' - '13' + '17';         //617
'19' - '13' + 17;           //23
'123' < 57;                 //false
5 + 6 + '4' + 9 - 4 - 2;    //1143
////////////////////////////////////////////////////////////////

//Equality Operators: == vs. === 

// const numNeighbors = prompt('How many neighbour countries does your country have?')
// if(numNeighbors == 1){
//     console.log('Only 1 border!');
// }else if(numNeighbors > 1){
//     console.log('More than 1 border');
// }else{
//     console.log('No borders');
// }

// const numNeighbors = prompt('How many neighbour countries does your country have?');
// if(numNeighbors === 1){
//     console.log('Only 1 border!');
// }else if(numNeighbors > 1){         //greater than/less than operators will coerce strings into numbers to check their relative value
//     console.log('More than 1 border');
// }else{
//     console.log('No borders');
// }

const numNeighbors = Number(prompt('How many neighbour countries does your country have?'));    //changed typeof to number with 'Number' method
if(numNeighbors === 1){
    console.log('Only 1 border!');
}else if(numNeighbors > 1){         
    console.log('More than 1 border');
}else{
    console.log('No borders');
}
////////////////////////////////////////////////////////////////
*/