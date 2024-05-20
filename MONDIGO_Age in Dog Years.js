//Task 1: This sets the constant age to be 14.
const myAge = 14;

//Task 2: This indicates that the early years are the first 2 years.
let earlyYears = 2;

//Task 3:
earlyYears *= 10.5;

//Task 4: This shows that the later years is the current age minus the first 2 years.
let laterYears = myAge - 2;

//Task 5: This line of code reassigns the value of later years to 4 times as much as this is the later years converted to dog years.
laterYears *= 4;

//Task 6: 
console.log(earlyYears, laterYears)

//Task 7: This shows that my age in dog years is the sum of the early years in dog years plus the later years in dog years.
const myAgeInDogYears = earlyYears + laterYears;

//Task 8: This changes all the characters in Hannah Christi D. Mondigo to lowercase using .toLowerCase().
const myName ='Hannah Christi D. Mondigo'.toLowerCase();

//Task 9: This line of code replaces ${myName} to hannah christi d. mondigo, ${myAge} as my actual age, ${myAgeInDogYears} as my actual age converted to dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
