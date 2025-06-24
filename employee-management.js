//Employee constructor function

function Employee(id, name, department, salary) {
  this.id = id;
  this.name = name;
  this.department = department;
  this.salary = salary;
}

// create a simple employee database

const employeeDB = {};

//function to add employee to the database

function addEmployee(id, name, department, salary){
    const employee = new Employee(id, name, department, salary);
    employeeDB[id] = employee;
    console.log("Employee with ID"+id+ " added")
}

//functions to get all employee data (Object.values)

function employeeDatas() {
  const employees = Object.values(employeeDB);
  console.log("List of Employees");
  employees.forEach((employee) => {
    console.log(`Name: ${employee.name}, Department: ${employee.department}, Salary: ${employee.salary}`)
  })
}

//Function to get employee details (Object.entries)

 function getEmployeeDetails(){
    if (employeeDB[id]) {
        return Object.entries(employeeDB[id])
    }
    return `Employee with ID ${id} is not found`;
 }
