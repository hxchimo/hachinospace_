// Problem 1: Write a function to calculate the area of a rectangle given its length and width.

function calculateRectangleArea(length, width) {
    return length * width;
}
console.log(calculateRectangleArea(5, 8)); 
// The expected output should be 40.


// Problem 2: Write a function to reverse a string.
function reverseString(str) {
    return str.split('').reverse().join(''); 
}
console.log(reverseString("hello")); 
// The expected output should be "olleh".


// Problem 3: Write a function to generate a random number between a given minimum and maximum value.
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10)); 
// The expected output should be a random number between 1 and 10.


// Problem 4: Write a function to count the number of vowels in a string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    return count;
}

console.log(countVowels("hello")); 
// The expected output should be 2.


// Problem 5: Write a function that takes an integer as input and returns "Even" if the number is even, and "Odd" if the number is odd.

function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd"; 
}

console.log(checkEvenOrOdd(7));  
// The expected output should be Odd.

console.log(checkEvenOrOdd(10)); 
// The expected output should be Even.
