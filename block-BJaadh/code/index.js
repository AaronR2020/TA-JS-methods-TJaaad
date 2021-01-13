// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101))
// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9))
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));




// - Add two new words in the strings array "called" and "sentance"
console.log(strings.push("called","sentance"));
console.log(strings)
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(strings.join(" "))
// - Remove the first word in the array (strings)
strings.shift();
console.log(strings,`updated`)



// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.join(" ").includes("is"))
// - Find all the words that contain 'is' use string method 'indexOf'
console.log(`"is" is located at position`,strings.indexOf("is"))
// - Check if all the numbers in numbers array are divisible by three use array method (every)
function div3(num){
 return num%3==0?true:false
}
console.log(numbers.every(div3))



// -  Sort Array from smallest to largest
function sorting(a,b){
  return a-b
}
console.log(numbers)
console.log(numbers.sort(sorting))

// - Remove the last word in strings
console.log(strings.pop(),` is the last word that is poped`)
// - Find largest number in numbers
console.log(numbers.sort(sorting).slice(numbers.length-1))




// - Find longest string in strings
stringlen=[...strings]
function cmplen(num){
  return num.length
}
console.log(stringlen)
stringlen=stringlen.map(cmplen).sort(sorting).slice(-1);
function check(i){
  return i.length==stringlen?console.log(i,`is the largest word`):""
}
strings.forEach(check);


// - Find all the even numbers
function EvenNo(i){
  return i%2==0?i:""
}
function oddNo(i){
  return i%2!==0?i:""
}
evenno=numbers.filter(EvenNo)
console.log(evenno)
// - Find all the odd numbers
evenno=numbers.filter(oddNo)
console.log(evenno)




// - Place a new word at the start of the array use (unshift)
strings.unshift("holloWorld");
// - Make a subset of numbers array [18,9,7,11]
subsetNumber=[18,9,7,11];
// - Make a subset of strings array ['a','collection']
subsetString=["a","collection"];
// - Replace 12 & 18 with 1221 and 1881
function numRep(i){
  return i==12?1221:i==18?1881:i
}
numbers=numbers.map(numRep);
numbers=numbers.map(numRep)
console.log(numbers)
// - Replace words in strings array with the length of the word
console.log(strings)
stringlenfinal=strings.map(cmplen)
console.log(stringlenfinal)
// - Find the sum of the length of words using above question

stringlenfinal.reduce(function(a,b){return a+b},0)//a=a+b

console.log(stringlenfinal)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
function nameCheck(name){
  return name.firstname.charAt(0)=="J"?true:false;
}
console.log(customers.filter(nameCheck),"J")
// - Create new array with only first name
function names(i){
  return i.firstname;
}
function namesFull(i){
  return `${i.firstname} ${i.lastname}`;
}
firstnameArray=customers.map(names)
console.log(firstnameArray)

// - Create new array with all the full names (ex: "Joe Blogs")
namesFull=customers.map(namesFull)
console.log(namesFull)
// - Sort the array created above alphabetically
console.log(namesFull.sort())
// - Create a new array that contains only user who has at least one vowel in the firstname.
function vowel(i){
 return i.firstname.search("a"||"e"|"i"|"o"|"u")?i.firstname:"";
}
console.log(customers.map(vowel))