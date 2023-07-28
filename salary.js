class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee = new Employee("Ranjeet pandey", "web-developer", 500000);
  
  // Call the getSalary method
  console.log(employee.getSalary()); // Output: 5000
  