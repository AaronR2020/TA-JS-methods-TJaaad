Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

let numbersA=[1,2,3,4,5,6]
let numbersB=[7,8,9,10]

mutation: the original array changes its own values on applying a method(), i.e returns a new array;

non-mutation: the original array does not changes its own values when applied a method(), i.e returns the old variable;

no mutation: the original variable 
1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`//no mutation
the join method creates and return a new string;

if the join method has a symbol passed through it, that symbol acts as a seperator

a=[1,2,3]
a.join("-")
output//:"1-2-3"



3. `flat`//mutable
an array can have many levels, i.e array within an array. e.g:a= [1,2,3[4,5,6[7,8,9]]]

in the above example we notice we have 2 level deep array; i.e there are 2 arrays within a array;each within an array.

array_name.flat(argument)

the argument here tells us how deep within the array do we need to flaten

eg. a.flat(1)// output: 1,2,3,4,5,6,array(3)

to flatten at every level use infinite as a argument

a.flat(infinite)


4. `push`//mutable
push adds an element in an array at the extream end. eg: a=[1,2,3]
a.push("alpha")
//output: 1,2,3,"Alpha"

5. `indexOf`// non mutable
if we have to find a perticular value's location, i.e its index value we use indexOf()
the argument passed within is the element to search for
you can get 2 possible values
first, the index position of first occurance
second, the if the value to be searched is missing it returns a -1

a=[1,2,4,1,3,5,1]
a.indexOf(1)
//output 0
a.indexOf(1223)
//output -1


6. `lastIndexOf` // non mutable
if we have to find a perticular value's location, i.e its index value we use indexOf()
the argument passed within is the element to search for
you can get 2 possible values
first, the index position of last occurance
second, the if the value to be searched is missing it returns a -1

a=[1,2,4,1,3,5,1]
a.indexOf(1)
//output 6
a.indexOf(1223)
//output -1

7. `includes`// non mutable.
this method returns true or false
this method searches for a given value in a array; if it is present it returns true else false;

it takes one argument, i.e the element to search:)

a=[1,2,3]
a.includes(1)//true
a.includes(11)//false


8. `reverse`//mutable.
it reverses the array
a=[1,2,3]
a.reverse();
//output: [3,2,1]

9. `every`// non mutable.
The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

a.every(cb);
cb is the callback function where each and every element is passed through.

only if *all* the elements pass the test that is send to the cb function, only then does the every() method returns a true value

10. `shift`// mutable.
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

array1 = [1, 2, 3];
const firstElement = array1.shift();

console.log(array1);// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.

11. `splice`
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

it has 3 parameters 
the 1st parameter states where to start removing/replacing from: if val:1, it means start from position 1(pos starts from 0);

the second parameter means how many elements do you want to delete ?
if this value is 0 it checks for the 3rd parameter and adds that value in the 1st parameters location

a=[1,2,3,4,5]
a.splice(0,0,"firstElement");//["firstElement", 1, 2, 3, 4, 5]

a.splice(1,0,"atPos1");//["firstElement", "atPos1", 1, 2, 3, 4, 5]

12. `find`
returns the same value if present else returns undefined.

it returns only one value;

the arguement is a function 

a=[1,2,3,4,5,6,7,8,9]
a.find((num)=>num==5)//5

a.find((num)=>num==55)//undefined

here num is basically a itteration of all numbers in the array a;

13. `unshift`//mutable
unshift adds elements to the left of the array in the same order of the arguments

a=[1,2,3]
a.unshift("a","b")//[a,b,1,2,3]


15. `filter`
its argument is a function; the return type of the function is converterd to its boolean value. so if no value is returned it is undefined, and undefined value if converted to boolean is false

only true values are returned, thus can store them in an array;

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


17. `forEach`
this method does not return a value. it is used to itterate through a array and perform a set of instruction on it;
eg:-

a=[1,2,3]
a.forEach(cb); where cb is a callback fn.

function double(num){
  console.log(num*2)
}
a.forEach(double);


18. `map`
this method return a new array. it is used to itterate through a array and perform a set of instruction on it;
eg:-

a=[1,2,3]
newVal=a.map(cb); where cb is a callback fn.

function double(num){
  console.log(num*2)
}
let newVal=a.map(double);
console.log(vawVal)

19. `pop`
pop()method is used to remove the last value i.e on the right of the array.

20. `reduce`...do later

21. `slice`
it returns a copy of the portion of the array
it takes 2 arguments, i.e starting and (ending point-1).
the original array wont be modified.
if only one argument is added, it considers it as a starting point and continue till the end of the array.

a=[1,2,3,4,5,6,7]
console.log(a.slice(3,5))
//4,5
console.log(a.slice(3))
//3,4,5,6,7


22. `some`
this method returns true if atleast one element satisfies the function

The some() method tests if atleast one elements in the array pass the test implemented by the provided function. It returns a Boolean value.

a.some(cb);
cb is the callback function where each and every element is passed through.

only if *atleast one* of the elements pass the test that is send to the cb function, only then does the some() method returns a true value