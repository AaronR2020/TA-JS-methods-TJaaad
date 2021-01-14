let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(strVal){
  return strVal.length
}
wordslen=words.map(findLongestWord)
console.log(wordslen)
strMax=wordslen.indexOf(Math.max(...wordslen));
console.log(words[strMax],` is the largest word in the list `)

// - Convert the above array "words" into an array of length of word instead of word.
lenWords=words.map(findLongestWord);
console.log(lenWords)
// - Create a new array that only contains word with atleast one vowel.
function vowels(str){
  return str.includes("a"||"e"||"i"||"o"||"u")?true:false
}
vowelWord=words.filter(vowels)
console.log(vowelWord)
// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"))
// - Create a new array that contians words not starting with vowel.


function NotVowels(str){
  console.log(str.charAt(0))
  return str.charAt(0)=="a"||str.charAt(0)=="e"||str.charAt(0)=="i"||str.charAt(0)=="o"||str.charAt(0)=="u"?false:true
  
}
wordsNoV=words.filter(NotVowels);
console.log(wordsNoV)
// - Create a new array that contianse words not ending with vowel

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
var sumV=0;
function sum(val){
sumV+=val;
return sumV;
}
sumArray=numbers.map(sum)
console.log(sumArray[sumArray.length-1],`is the total sum`);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function mul3(num){
  return num*3;
}
console.log(numbers.map(mul3))
// - Create a new array that contains only even numbers
function evenN(num){
  return num%2==0?true:false
}
console.log(numbers.filter(evenN))
// - Create  a new array that contains only odd numbers.
function oddN(num){
  return num%2!=0?true:false
}
console.log(numbers.filter(oddN))
// - Create a new array that should have true for even number and false for odd numbers.
function evenBol(num){
  return num%2==0?true:false
}
console.log(numbers.filter(evenBol))
// - Sort the above number in assending order.
numbers.sort((a,b)=>{ return a-b })
// - Does sort mutate the original array?
console.log(numbers)
// - Find the sum of the numbers in the array.
//already done
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
var avg=0

function avgSum(num){
 return avg+=num.length;
}

total=words.map(avgSum)
console.log(total)
avg=total[total.length-1]/total.length

console.log(avg,"avg")

