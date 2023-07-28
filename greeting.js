function greet(name) {
    return new Promise((resolve) => {
 const greeting = `Hello, ${name}!`;
        resolve(greeting);
    });
}
greet("Ranjeet").then((message) => console.log(message)); //Hello Ranjeet