class Car {
    constructor(Company, Model, Year) {
        this.Company = Company;
        this.Model = Model;
        this.Year = Year;
    }
    getDescription() {
        return `This is a ${this.Company} ${this.Model} ${this.Year}`;
    }
}

// instantiate an instance of the car
const car = new Car("Mahindra","Thar",2023);

// call the get description method
console.log(car.getDescription());
