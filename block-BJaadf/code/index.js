let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
console.log(fruits.push("Papaya"));
// Remove the last element from fruits array
console.log(fruits.pop());
// Log the current length of fruits array
console.log(fruits.length  );
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
console.log(fruits.shift()  );
// Log the element on index 0 and 1
console.log(`${fruits.slice(0,2)}`);
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
function check(arr){
    arr[0]==undefined&&arr[1]==`Banana`?fruits.shift():""
}
check(fruits)
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift(`Guava`);
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift(`Dragon Fruit`);
// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
console.log(fruits[0]==`Dragon Fruit`&&fruits[1]==`Gauva`);
// Update the value of index 1 to `Pears`
fruits[1]="Pears";
console.log(fruits);
// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.unshift(`Kiwi`,`Lemon`)
// Remove (slice) all the element from index 5
console.log(fruits.slice(5))
// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits=["Berries",",Melons"];
// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits.concat(moreFruits);
// Log the name of all fruit in console
console.log(fruits);
// Convert each fruit name to lowercase and log it
function cb(num){ return num.toLowerCase()}
fruit=fruits.map(cb);
function cb1(num){ return num}
fruits=fruit.map(cb1)
// Convert all fruits name into lowercase and store in new array named lowercaseFruits
function cb(num){ return num.toLowerCase()}
LowerCaseFruits=fruits.map(cb);
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
function cb2(num){ return num.toUpperCase()}
LowerCaseFruits=fruits.map(cb2);
let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];


//.............................(do the rest tomorrow).............................

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
console.log(numbers=numbers.flat(1),`flat array`)
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
console.log(numbersTwo=numbersTwo.flat(1),`flat array`)
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

// Convert the numbersThree array to one level element.
console.log(numbersThree=numbersThree.flat(1),`flat array`)
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
console.log(numbersThree=numbersThree.flat(Infinity))
// Use forEach to log all the elements of numberThree array
function displayAll(num){
    console.log(num,`:)`)
}
numbersThree.forEach(displayAll)
// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
function mulTwo(num){
    return num*2
}
doubleNumbers=numbersThree.map(mulTwo);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
function mulThree(num){
    return num*3;
}
tripleNumbers=numbersThree.map(mulThree);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
function halfNum(num){
    return num*3;
}
halfNumbers=numbersThree.map(halfNum);
console.log(numbersThree,doubleNumbers,tripleNumbers,halfNumbers)
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
function oddNo(num){
    return num%2!==0
}
oddNumbers=numbersThree.filter(oddNo);
console.log(oddNumbers);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
function EvenNo(num){
    return num%2!==0
}
EvenNumbers=numbersThree.filter(EvenNo);
console.log(oddNumbers);
// Find the index of 10 in numbersThree array
function numTen(num){
return num==10
}
console.log(numbersThree.findIndex(numTen),` : is the index position of 10 in `,numbersThree)
// Reverse the values of numbersThree array
console.log(numbersThree,` no reverse`);
console.log(numbersThree.reverse(),` reverse`)
// Reverse the values of numbersTwo array
console.log(numbersTwo,` no reverse`);
console.log(numbersTwo.reverse(),` reverse`)
// Join all fruits with '-', convert to uppercase and log it
console.log(fruits.join(`-`).toUpperCase())
// Join all fruits with '&', convert to lowercase and log it
console.log(fruits.join(`&`).toLowerCase())