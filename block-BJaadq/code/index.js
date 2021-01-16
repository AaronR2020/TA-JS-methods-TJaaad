// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  // your code goes here
  function sumppl(people){
   return people.people.length;
  }
  let sum=got.houses.map(sumppl)
  var sumOf=0;
  for(let num of sum){
    sumOf+=num
  }
  return sumOf;
}

function peopleByHouses() {
  // your code goes here
let obj={}
for(i=0;i<got.houses.length;i++){
  obj[got.houses[i].name]=got.houses[i].people.length;
}
return obj;
}

function everyone() {
  return got.houses.map((names)=>{return names.people.map((ppl)=>{return ppl.name})}).flat(Infinity)
}

function nameWithS() {
  let sum= got.houses.map((names)=>{return names.people.filter((people)=>{return people.name.charAt(0)=="s"||people.name.charAt(0)=="S"?people.name:false})}).flat(Infinity)
  return sum.map((val)=>{return val.name})
}

function nameWithA() {
  // your code goes here
  let sum= got.houses.map((names)=>{return names.people.filter((people)=>{return people.name.charAt(0)=="a"||people.name.charAt(0)=="A"?people.name:false})}).flat(Infinity)
  return sum.map((val)=>{return val.name})
}

function surnameWithS() {
  return got.houses.filter((house)=>house.name.charAt(0)=="S"||house.name.charAt(0)=="s"?true:false ).map((val)=>val.name)
}

function surnameWithA() {
  // your code goes here
  return got.houses.filter((house)=>house.name.charAt(0)=="a"||house.name.charAt(0)=="A"?true:false ).map((val)=>val.name)
}

function peopleNameOfAllHouses() {
  // your code goes here
  let obj={};
  
  for(let i=0;i<got.houses.length;i++){
    obj[got.houses[i].name]=got.houses[i].people.map((names)=>names.name).flat(Infinity);
  }
return obj; 
}


// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
