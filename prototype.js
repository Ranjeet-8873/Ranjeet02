function Student(name) {
    this.name= name;
};

Student.prototype.printDetails = function() {
    console.log(" Hello, my name is " + this.name);
}

// Instantiate the new object with the function

var brilliant = new Student("Golden Pandey");

// call the printDetails method
brilliant.printDetails();