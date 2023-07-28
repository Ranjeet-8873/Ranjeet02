function minMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),

    };
}
const array =[5, 9, 4, 8, 33, 66, 5544]
console.log(minMax(array));