const store = {
    item1: 10, // USD
    item2: 20, // USD
    item3: 30, // USD
    item4: 40, // USD
    item5: 50, // USD
};
const exchangeRate = 80; //INR PER USD

convertedStore = Object.fromEntries(
    Object.entries(store).map(([item,price]) => [item, price * exchangeRate])

);
console.log(convertedStore);