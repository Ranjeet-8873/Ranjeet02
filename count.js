function countwords (str) {
    const words = str.split(" ");
    const map = new Map

    for (let word of words) {
        if(map.has(word)) {
            map.set(word, map.get(word) +1)
        } else {
            map.set(word, 1)
        }
    }
    return map;
}
const sentence = "i am ranjeet pandey and meaning of my name is to get victory in any situation"
console.log(countwords(sentence));