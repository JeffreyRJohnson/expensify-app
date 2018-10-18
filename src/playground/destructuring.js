// Object destructuring

// const person = {
//   name: 'Jeff',
//   age: 38,
//   location: {
//     city: 'Jackson',
//     temp: 80
//   }
// };

// const { name = 'Anon', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp } = person.location;

// if (city && temp) {
//   console.log(`It's ${temp} in ${city}`);
// }

// array destructuring

const address = ['1299 S Juniper Street', 'Philli', 'PA', '19147'];

const [, city, state] = address;

console.log(`you are in ${city} ${state}`);

const item = ['Coffee (hot)', '2.00', '2.50', '2.75'];

const [name, small, medium, large] = item;

console.log(`A medium ${name} costs ${medium}`);
