const person = {
    name: "Ranjeet",
    age:24,
    address: {
        village:"chhotaka-more",
        district: "Rohtas",
        state: "Bihar"
    }
}
function extractData(object) {
    const {
        name,
        address: {village},
    } = object;
    return {name,village}
}
console.log(extractData(person));