var x = 5;

let y = 26;

const z = 55; // нельзя перезаписать

console.log(y);

let lastName = null;

let isXEqualY = x == y;

console.log(isXEqualY);

let name = 'Anton';

console.log(name * x);

let infinitiNumber = Infinity

let a = b = c = 67;

let someString = '11' + 6

let array = [ 1 , 2 ,3 ,5, x, y, name, '2564 bla' ]

array.push(888)


let objectMainField = 'person-adress'


let person = {
 name: 'Anton',
 age: 24,
 education: [
  {
   university: 'KNNN',
  },
  {
   university: 'sdfsdf',
  }
 ],
 'person-adress': 'Khardkiv',
}

person['age']

console.log(person[objectMainField])
console.log(person['person-adress'])

person.education[0].university = 'Sharaga'

let cars = [
	{
		name: 'BMW',
		models: [
		{
			model: 'X5',
			price: 77777,
		},
		{
			model:'M3',
			price: 6666
		}

		],
	},
	{
		name: 'Mercedes',
		models:[
			{
				model: '600',
				price: 1234
			},
			{
				model: 'ml 350',
				price: 2727
			}

		]
	}
]
 

 let gudzenko = {
 	name: 'Anton',
 	height: 180,
 	children: [
 		'Olga',
 		'Sasha'
 	],
 	'some key': 12123
 }

let name1 = 'Andrey';
let lastName1 = 'Strelets';
let fullName = name1 + " " + lastName1


const firstPerson = {
	name: 'Oleg',
	age: 17,
}

const secondPerson = {
	name: 'Maria',
	age: 23,
}


if (firstPerson.age >= 18) {
	console.log('You can buy this alco')
} else {
	console.log('I will not sell you this alco')
}

if (secondPerson.age >= 18) {
	console.log('You can buy this alco')
} else {
	console.log('I will not sell you this alco')
}

if (firstPerson.age >= 18) {
	console.log('You can buy this alco')
} else if (firstPerson.name === 'Oleg'){
	console.log('You are bad man')
} else {
		console.log('I will not sell you this alco')

}



const canSellAlco = firstPerson.age >= 18 ? "Yea" 
	: (firstPerson.name === 'Oleg') ? "you are bad man" 
	: "No"

 const newX = ++x;
 const anotherX = x++;

const ihor = {
		name: "Slava",
		age: 20,
}

let list = [
	ihor,
	{
		name: "Igor",
		age: 45,
	},
	{
		name:'Andrey',
		ege:27,
	},
	{
		name: "Evgen",
		age: 30,
	},

]

for (let i = 0; i < list.length; i++) {
	const item = list[i]
	if (item.age > 25) {
		continue;
	}
	console.log(item.name)
	if (item.age === 30) break;
}











