newFunc();

// anotherFunc();

function newFunc(message, secondMessage) {
	if (!message){
		//выкинет ошибку и остановить код
		// throw new Error('you should set 1 or more arguments')
		// или если не надо остановливать код
		console.log('you should set 1 or more arguments')
	} else {
	console.log('Hello ' + message);

		if (secondMessage) {
		console.log(secondMessage);
		}

	}
}


// var anotherFunc = function () {
// 	console.log('lm another function')
// }

newFunc('lm  Andrey');

newFunc('im Oleg', 'Im 24 years old')

function doubleNumber(n1) {
	return n1 * 2;
}

function multiply(n1, n2) {
	return doubleNumber(n1) * doubleNumber(n2);
}

console.log(multiply(3,4));

function getFullName() {
	return this.name + ' ' + this.lastName;
}

let teacher = {
	name: 'Anton',
	lastName: 'Kamardin',
	getFullName: getFullName,
}

let student = {
	name: 'Alecsey',
	lastName: 'Kisil',
	getFullName: getFullName,
}


const fullName = teacher.getFullName();
console.log(fullName);

const studentfullName = student.getFullName();
console.log(studentfullName);


const indexOfLastName = studentfullName.indexOf('Kisil')
console.log(indexOfLastName);

const lastName = studentfullName.slice(indexOfLastName, indexOfLastName + 3);
console.log(lastName)


const name = 'Anton Kamardin';

const loverCaseName = name.toLowerCase();
const upperCaseName = name.toUpperCase();

console.log(loverCaseName);
console.log(upperCaseName);


//reverse the string
const filmName = 'Tenet';
const reversedFilmName = filmName.split('').reverse().join('');
console.log(reversedFilmName);

//Удаляет пробелы по краям
const someString = '    example@g mail.com  ';
console.log(someString.trim());
// удаляет все пробели в строке
//console.log(someString.replece(/\s/g, ''));
//console.log(someString.replaceAll(' ', ''));

const someArr = [
	[1,2,3],
	[3,4,5],
	[6,7,8]
].flat()

const array = [1, 2, 3, 4, 5];
// //remove the last element
// array.pop();
// //remove the first element
// array.shift();

array.splice(1, 2, 888, 'sdd', '%snjjs', array)
console.log(array);

const numberArray = [12, 45, 56, 1234, 3131, 34];
numberArray.forEach( function (item, index, list){
	if (item > 50) {
		console.log(item)
	}

	const isLast = index === list.length -1

	if (isLast) {
		console.log('it was the last number')
	}


})

const people = [teacher, student]
const morePeople = [teacher, student, teacher, student, teacher, student]
people.forEach(function(person){
	console.log(person.getFullName())

})

function showFullName(person, index, list) {
	console.log(person.getFullName())

	const isLast = index === list.length -1

	if (isLast) {
		console.log('it was the last number')
	}

}

people.forEach(showFullName);
morePeople.forEach(showFullName);


const peopleWithFullName = morePeople.map(function(item, index, list){
	// const { age } = item
	// return{
	// 	...item,
	// 	fullName: item.getFullName(),
	// 	age: age || 18,
	// }

	const { age = 18 } = item
	return{
		...item,
		fullName: item.getFullName(),
		age,
	}
})

console.log(peopleWithFullName);




































































































