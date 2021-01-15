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

// Create an array peopleName and store value of name key from persons array
function nameP(obj){
  return obj.name
}
peopleName=persons.map(nameP);
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
function gradeP(obj){
  return obj.grade
}
peopleGrade=persons.map(gradeP);
console.log(peopleGrade);
// Create an array peopleSex and store the value of sex key from persons array
function sexP(obj){
  return obj.sex
}
peopleSex=persons.map(sexP);
console.log(peopleSex);
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
function jpnames(index){
  return index.charAt(0)=="J"|| index.charAt(0)=="P"?true:false}
JPname=peopleName.filter(jpnames)
console.log(JPname)
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
function aclen(index){
  return index.charAt(0)=="A"|| index.charAt(0)=="C"?true:false;
}
function lengAC(c){
 return c.length;
}
AClength=peopleName.filter(aclen)
AClength=AClength.map(lengAC)
console.log(AClength)


// Log all the filtered male ('M') in persons array
function isMale(obj){
  return obj.sex=="M"?true:false
}
peopleMale=persons.filter(isMale);
console.log(peopleMale,"male");
// Log all the filtered female ('F') in persons array
function isFemale(obj){
  return obj.sex=="F"?true:false
}
peopleFemale=persons.filter(isFemale);
console.log(peopleFemale,"female");







// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
function FisCJ(index){
  return index.name.charAt(0)=="C"||index.name.charAt(0)=="J"?true:false;
}
console.log(peopleFemale.filter(FisCJ),"females names starting from C and J")
// Log all the even numbers from peopleGrade array
function evenGrade(num){
  return num.grade%2==0?true:false
}
console.log(persons.filter(evenGrade),`even grade`)




// Find the first name that starts with 'J' in persons array and log the object
function Jname(index){
 return index.name.charAt(0)=="J"?true:false
}
Jnames=persons.filter(Jname)
console.log(Jnames[0],`name starting with J`)
// Find the first name that starts with 'P' in persons array and log the object
function Pname(index){
  return index.name.charAt(0)=="P"?true:false
 }
 Pnames=persons.filter(Pname)
 console.log(Pnames[0],`name starting with J`)
// Find the first name that starts with 'J', grade is greater than 10 and is a female

function Jname(index){
  return index.name.charAt(0)=="J"?true:false;
 }
 function grade10(index){
  return index.grade>10;
 }
 Jnames=persons.filter(Jname).filter(grade10).filter(isFemale)
 console.log(Jnames[0],`name starting with J, grade > 10 , is female`)



// Filter all the female from persons array and store in femalePersons array
function isFemale(obj){
  return obj.sex=="F"?true:false
}
femalePersons=persons.filter(isFemale);
console.log(femalePersons)

// Filter all the male from persons array and store in malePersons array

malePersons=persons.filter(isMale);
console.log(malePersons)
// Find the sum of all grades and store in gradeTotal
var sum=0
function sumIndex(index){return index.grade}
function add(index){return sum+=index}
sumadd=persons.map(sumIndex).map(add)
console.log(sumadd[sumadd.length-1],`is the sum of all grades`)


// Find the average grade
console.log(sumadd[sumadd.length-1]/sumadd.length,` is the average of everyones grade`)
// Find the average grade of male
avgMale=persons.filter(isMale).map(sumIndex).map(add)
console.log(avgMale[avgMale.length-1],`male sum`)
avgmaleValue=avgMale[avgMale.length-1]/peopleMale.length
console.log(avgmaleValue,`avg grade of male`)
// Find the average grade of female
avgfemale=persons.filter(isFemale).map(sumIndex).map(add)
console.log(avgfemale[avgfemale.length-1],`female sum`)
avgfemale=avgfemale[avgfemale.length-1]/avgfemale.length
console.log(avgfemale,`avg grade of female`)




// Find the highest grade
function listOfGrade(person){
 return person.grade;
}
gradeList=persons.map(listOfGrade)
console.log(gradeList,`list of grades`)
gradeList=gradeList.sort((a,b)=> { return a-b })
console.log(gradeList[gradeList.length-1],`heighest grade`)
// Find the highest grade in male
maleGrade=persons.filter(isMale).map(listOfGrade)
maleGrade=maleGrade.sort((a,b)=> { return a-b })
console.log(maleGrade[maleGrade.length-1],`heighest grade in male`)
// Find the highest grade in female
femaleGrade=persons.filter(isFemale).map(listOfGrade)
femaleGrade=femaleGrade.sort((a,b)=> { return a-b })
console.log(femaleGrade[femaleGrade.length-1],`highest grade in female`)




// Find the highest grade for people whose name starts with 'J' or 'P'
function infoJP(index){
  return index.name.charAt(0)=="J"|| index.name.charAt(0)=="P"? index.grade:false;
}
gradeJP=persons.filter(infoJP).sort((a,b)=> { return a-b })
console.log(gradeJP[gradeJP.length-1],`J P heighest grade`)
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log("yes ")
// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a,b)=>{return b-a}))




// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
peopleGradeNew=[...peopleGrade]
console.log(peopleGradeNew.sort((a,b)=>{return b-a}))
// Sort the array peopelName in ascending `ABCD..Za....z`
function nameAssen(index){
    return index.name
}
console.log(persons.map(nameAssen).sort())
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
peopleNameNew=[...peopleName]
console.log(peopleNameNew.sort())