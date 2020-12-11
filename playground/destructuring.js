//Object destructuring

// const person = {
//     name: 'Deb',
//     age: 32,
//     location: {
//         city: 'florida',
//         temp: 100
//     }
// }

// const {name = 'anonymous', age} = person

// console.log(`${name} is ${age}.`)

// const {city, temp: temparature} = person.location

// console.log(`Temparature in ${city} is ${temparature}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Rayan holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// } 

// const {name: publisherName = 'Self published'} = book.publisher

// console.log(publisherName);

//Array destructuring

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00']
const [itemName,,mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice} `);
