const fs = require('fs');

// const book = {
//     name: 'Vans',
//     planet:'Earth',
//     age:'38'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const user =JSON.parse(dataJson);

user.name = 'Vanessa'
user.age = 38

const userJSON =JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)


console.log(user.name, user.planet, user.age);


