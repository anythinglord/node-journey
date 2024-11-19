const { v4: uuidv4 } = require('uuid');
const  getAge = require('get-age')

const buildPerson = ({ name, birthdate }) => {
    return {
        id: uuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate)
    }
}

const obj = {
    name: 'Jhon',
    birthdate: '1990-10-21'
};
const Jhon = buildPerson(obj)
console.log(Jhon)