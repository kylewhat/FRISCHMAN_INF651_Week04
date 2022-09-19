
const myNumber = 5;
console.log(`Question 1 - the variable 'myNumber' is defined`);
logValue(myNumber)

console.log(`Question 2 - the variable 'myNumber' should be type number / equal to 5`);
logValue(myNumber)

const myOtherNumber = 5;
console.log(`Question 3 - the variable 'myOtherNumber' should be type defined / a number / equal to 5`);
logValue(myOtherNumber)

const myTotal = myNumber * myOtherNumber;
console.log(`Question 4 - the variable 'myTotal' should be type defined / a number / equal to ${myNumber} * ${myOtherNumber}`);
logValue(myTotal)

const myName = 'Kyle Frischman';
console.log(`Question 5 - the variable 'myName' should be type defined / a string `);
logValue(myName)

const myCombo = (myNumber + myOtherNumber).toString();
console.log(`Question 5 - the variable 'myCombo' should be type defined / a string / equal to ${myNumber} + ${myOtherNumber}`);
logValue(myCombo)

const myOtherCombo = myNumber + myOtherNumber;
console.log(`Question 6 - the variable 'myOtherCombo' should be type defined / a number / equal to ${myNumber} + ${myOtherNumber}`);
logValue(myOtherCombo)

const myRemainder = myNumber % 5;
console.log(`Question 7 - the variable 'myRemainder' should be type defined / a number / equal to ${myNumber} % 5`);
logValue(myRemainder)

const i = 2;
console.log(`Question 8 - the variable 'i' should be type defined / a number / equal to 2`);
logValue(i)

const int = 4;
console.log(`Question 9 - the variable 'int' should be type defined / a number / equal to 4`);
logValue(int)

const myBoolean = false;
console.log(`Question 10 - the variable 'myBoolean' should be type defined / a nubooleanmber / false`);
logValue(myBoolean)

function logValue(value){
	console.log(`Value: ${value}\nType: ${typeof(value)}`)
}