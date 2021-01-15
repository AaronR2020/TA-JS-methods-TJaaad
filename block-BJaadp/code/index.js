let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
function cbAvg(acc,val){
    return acc+val.grade
}
console.log(persons.reduce(cbAvg,0),`avg grade`)
// Find the average grade of male
function isMale(index){
  return index.sex=="M"?true:false
}
console.log(persons.filter(isMale).reduce(cbAvg,0),`avg male grade`)
// Find the average grade of female
function isFemale(index){
  return index.sex=="F"?true:false
}
console.log(persons.filter(isFemale).reduce(cbAvg,0),`avg female grade`)




// Find the highest grade
function HighestGrade(acc,val){
  console.log(val);   
 return acc>val.grade?acc=acc :acc=val.grade;
}
console.log(persons.reduce(HighestGrade,persons[0].grade),`highest grade male`)
// Find the highest grade in male
console.log(persons.filter(isFemale).reduce(HighestGrade,persons[0].grade),`highest grade female`)// Find the highest grade in female





// Find the highest grade for people whose name starts with 'J' or 'P'
function nameJPgrade(person){
  return person.name.charAt(0)=="J"||person.name.charAt(0)=="P"?person:false;
}
console.log(persons.filter(nameJPgrade).reduce(HighestGrade,persons[0].grade),`intial naem J or P highest grade`)


//..............................................................................................

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 
Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/
fruitBasketSort=[...fruitBasket]
fruitBasketSort=fruitBasketSort.sort(" ")
function fruitsCount(arr,val){

  arr.reduce((acc,element)=>{
  return element==val?acc++:acc
  },0)
}
console.log(fruitsCount(fruitBasketSort,fruitBasketSort[0]))
/* 
Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/











const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array









const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

/*
Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/






/* let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
]; */

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7
  ...
*/






/* let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];
 */
// Find the output using pipeline2 the initial value if 8
