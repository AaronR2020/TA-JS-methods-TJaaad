Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:
str="Hello World";
1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
it acts as a method that converts a string to uppercase; It does not affect the string its working on; if you want it to work on a given string you have to assign it back to a string;

It does not take any parameters 

str.toUpperCase();//"HELLO WORLD"
3. `toLowerCase`
it acts as a method that converts a string to lowerCase; It does not affect the string its working on; if you want it to work on a given string you have to assign it back to a string;

It does not take any parameters 

str.toUpperCase();//"hello world"
4. `trim`
trim() acts as a method to a string that removes all blank spaces before and after a given text; keep in mind the blank spaces between characters remain as it is;

does not take in parameters;

str="     hello  world      ";
str.trim()//"hello  world"
5. `trimEnd`
trim() acts as a method to a string that removes blank spaces only at the end of a given text; keep in mind the blank spaces between characters remain as it is;

does not take in parameters;

str="     hello  world      ";
str.trim()//"     hello  world"

6. `trimStart`
trim() acts as a method to a string that removes blank spaces only at the beginning of a given text; keep in mind the blank spaces between characters remain as it is;

does not take in parameters;

str="     hello  world      ";
str.trim()//"hello  world      "

7. `concat`
concat is used to combine 2 or more strings; the result is ususlly stored in another string.

it takes n parameters

if a expression is set as a parameter, it is first solved then converted to string and then concatinated.

str1="hello";
str2="world"
res=str1.concat(" ",str2) //hello world

8. `endsWith`
it checks if the value you are searching is present at the end of the string or not;

has 2 parameter; second parameter is optional;
1st parameter:" what you want to search"
2nd parameter:"length of characters you want to search"[optional]

returns true or false;

let str = 'To be, or not to be, that is the question.';
str.endsWith('question.') //returns true;
str.endsWith('question.',5) //returns false; 5 means check only characters from position 0 to 5{the character from 0 to 5 are considered as one word}


9. `includes`
The includes() method determines whether one string may be found within another string, it returns true or false;

takes in 2 parameters:

1. is the word to search
2. is the position from where the search should begin from.

returns true or false;
code:

str="hello my name is Aaron"
str.includes("my")//true
str.includes("my",8)//false as search begins from position 8 i.e after "my"


10. `indexOf`//focus on only  first occurrence
it returns the position of the first occurance of the given word in the given parameter.
if indexOf(``) is a empty string it returns 0;
if indexOf(``,4) is a empty string stating at position 4 it returns 4;
str="Blue Whale"
str.indexOf(`Blue`)// returns 0
str.indexOf(`Bluooo`)// returns -1 as value is missing;
if the search value is below zero it still starts at position 0
str.indexOf(`Blue`,-100)// returns 0; the serash will also begin at posiyion 0;

true position is index+1; as it returns it starts counting from 0;
11. `lastIndexOf`//focus on only last occurrence
it returns the position of the first occurance of the given word in the given parameter.
if indexOf(``) is a empty string it returns 0;
if indexOf(``,4) is a empty string stating at position 4 it returns 4;
str="Blue Whale"
str.indexOf(`Blue`)// returns 0
str.indexOf(`Bluooo`)// returns -1 as value is missing;
if the search value is below zero it still starts at position 0
str.indexOf(`Blue`,-100)// returns 0; the serash will also begin at posiyion 0;

true position is index+1; as it returns it starts counting from 0;

12. `padEnd`//padding at the end.
first argument starts from 1;
first parameter value accepts the total length of the new word after padding;
second parameter accepts what it should be padded with;

The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

str=`Abc`
srt.padEnd(5,".");//Abc.. as total character are 5;
it adds padding at the end of the string;

13. `padStart`//padding at the start.
first argument starts from 1;
first parameter value accepts the total length of the new word after padding;
second parameter accepts what it should be padded with;
The number of padded elements that are added on the left are decided by first adding the content and only if there is space left then the start will be filled with the padded value.

The padStart() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

str=`Abc`
srt.padStart(5,".");//..Abc as total character are 5;
it adds padding at the end of the string;
14. `repeat`
it is a method that is used on a string; it has one parameter i.e how many times do we repeat the given string it was called on;

str="hello "
str.repeat(3)//hello hello hello 

repeat count must be non negitive and must be less that max. string size;

15. `replace`
it is used to replace a sequence of characters with another
takes in 2 parameters.

first parameter: word to be replaced;
second parameter: word to be replaced with;


16. `slice`
takes a slice of characters from a string.

takes in 2 parameters
first one is where to start from (start counting form 0)
if value is positive start from left ->   ;so 1 would be all but the first character from the left.

if value is negative start from right <-  ;so -1 would be "only" one character from the right

second value is the range of characters to take into consideration.

str="hello world"
str.slice(2, -1)// llo worl

17. `split`
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.;

only one parameter is accepted:
the accepted parameter is searched in the array; if we find the value in a string the the part before it occurance till its accorance is seperated and added to a array

str="hello world good day"
str.split(" ")//["hello","world","good","day"];

18. `substring`
The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
str="Hello World"
str.substr(1,4)//ello
start from position 1 end at position 4
if second parameter is not present, consider all characters till the end of the string.
