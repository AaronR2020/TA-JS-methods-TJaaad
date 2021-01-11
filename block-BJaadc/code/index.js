let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(`the length of "${message}" is ${message.length}`)
// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
console.log(`the first character of ${message} is ${message.charAt(0)}`)
// Log the last character of message using length like `The last character of [message] is [character]`
console.log(`the last character of ${message} is ${message.charAt(message.length-1)}`)
// Log the index of word "you" in message
console.log(`the index of the word you is ${message.indexOf("you")}`)
// Log the index of word "still" in message
console.log(`the index of the word still is ${message.indexOf("still")}`)
// Log the index of word "answers" in message
console.log(`the index of the word answer is ${message.indexOf("answer")}`)
// Log true or false based on whether the word "answers" exist in message or not
console.log(`the word answer exists? : ${message.includes("answer")}`)
// Log true or false based on whether the word "they" exist in message or not
console.log(`the word they exists? : ${message.includes("they")}`)
// Log true or false based on whether the word "is" exist in message or not
console.log(`the word is exists? : ${message.includes("is")}`)
// Log true or false based on whether the word "Is" exist in message or not
console.log(`the word Is exists? : ${message.includes("Is")}`)
// Check and log whether the word from index 3 to 6 is "you" or not (use slice)
console.log( message.slice(3,6)=="you"?true:false,`the word from 3 to 6 is "you"`);
// Check and log whether the word from index 7 to 8 is "a" or not
console.log( message.slice(7,8)=="a"?true:false,`the letter from 3 to 6 is "a"`);
// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)
console.log( message.slice(message.length-1-3,message.length-1)=="no!"?true:false,`the last 3 letters are no!`);
// Check and log whether the last 5 character in message is "no!" or not
console.log( message.slice(message.length-1-5,message.length-1)=="no!"?true:false,`the last 5 letters are no!`);
// Log the message variable, all in lowecase
console.log(message.toLowerCase());
// Log the message variable, all in uppercase
console.log(message.toUpperCase());
// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.
console.log(message.replace("are",`can't`));
// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
console.log(message.replace("still",``));
// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.
console.log(message.replace("thinking",`decide`));
// Log all the characters from the message variable (you can user for..of loop on string)
for(i in message){
    console.log(message.charAt(i),`:)`)
}
// Split all the words in message (split by " " space) and store it in a variable messageArray
messageArray=message.split(" ");
// Log all the words of messageArray
for(i in messageArray){
    console.log(messageArray[i])
}