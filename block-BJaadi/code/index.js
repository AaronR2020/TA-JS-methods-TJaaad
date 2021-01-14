// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];
console.log(numbers);
// - Find the index of `101` in numbers
console.log(numbers.indexOf(101), `is the index of 101`);
// - Find the last index of `9` in numbers
console.log( numbers.lastIndexOf(9) ,`is the index of 9`)
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(' '))
// - Add two new words in the strings array "called" and "sentance"
strings.push(`called sentense`)
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings)
// - Remove the first word in the array (strings)
console.log(strings.join(" "))
// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter(is),`contain the letters is`)

function is(char){
return char.includes("is")
}
// - Find all the words that contain 'is' use string method 'indexOf'

stringIS=[...strings];
stringIS=stringIS.filter(isIndex)
stringIS.forEach((element) => {
  console.log(stringIS.indexOf(element))
});
function isIndex(char){
return char.includes("is",`th index is the location where "is" is present`)
}
// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every(funct3))
function funct3(num){
return num%3==0;
}
// -  Sort Array from smallest to largest
numbSort=[...numbers]

console.log(numbSort.sort((a, b) => a - b))
// - Remove the last word in strings
strings.pop
// - Find largest number in numbers
console.log(numbSort.sort((a, b) => a - b)[numbSort.length-1])
// - Find longest string in strings

// - Find all the even numbers

// - Find all the odd numbers

// - Place a new word at the start of the array use (upshift)

// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
