function getPerson(person) {
    try{
        if (typeof person !== 'object' || !person.name || !person.age) {
         throw new Error('invalid parameter type');

        }
        return `name: ${person.name}, age: ${person.age}`
    } catch (error){
        return error.message;
    }
}
const person1 = { name:'Ranjeet Pandey', age: 25};
console.log(getPerson(person1)); // output: person:Ranjeet Pandey age:25
const person2 = { name: 'Golden Pandey', age: 24}
console.log(getPerson(person2)); //output: name:Golden pandey age:24
const person3 = { name: 'Royal-Bhumihar'};
console.log(getPerson(person3));//output: name:Royal-Bhumihar age:undefined
const person4 = 'Not an object';
console.log(getPerson(person4)); // output: invalid parameter type 