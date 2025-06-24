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

 //Function to update datas

 function updateEmployeeDetails(id, updateDetails){
   if (employeeDB[id]) {
     Object.assign(employeeDB[id], updateDetails)
   }
   else {
    console.log(`Employee with ID ${id} is not found`);
   }
 }

 //function to freeze employee data (we cannot delete or change data)

  function freezeEmployee(id){
    if (employeeDB[id]) {
     Object.freeze(employeeDB[id])
     console.log("Employee Data Freezed")
    }
    else {
     console.log(`Employee with ID ${id} is not found`);
    }

  }

  //function to seal employee data (we cannot delete but change data)

  function sealEmployee(id){
    if (employeeDB[id]) {
     Object.seal(employeeDB[id])
     console.log("Employee Data Sealed")
    }
    else {
     console.log(`Employee with ID ${id} is not found`);
    }

  }


