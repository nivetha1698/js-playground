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

 function getEmployeeDetails(id){
    if (employeeDB[id]) {
        return Object.entries(employeeDB[id]);
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


  //usage

  addEmployee(1, "Arun", "Engineering", 68000)
  addEmployee(2, "Bhavana", "Marketing", 80000)
  addEmployee(3, "Charan", "Sales", 57000)

 //view employees
  console.log("\n")
  employeeDatas();

  // get employee details with ID
  console.log("\n")
  console.log(getEmployeeDetails(2))

  // update employee details with ID

  console.log("\n")
  console.log(updateEmployeeDetails(1, {salary: 73000}))
  employeeDatas();

  // freeze employee data
  employeeDatas();
  console.log("\n")
  console.log("Freezing Employee Data")
  freezeEmployee(1);
  // try to modify frozen data
  employeeDB[1].salary = 40000 // this doesn't work
  employeeDatas();

  //seal employee data
   console.log("\n")
   console.log("Sealing Employee Data")
   sealEmployee(1);
   employeeDB[1].salary = 80000
   console.log("After Seal")
   console.log(getEmployeeDetails(1))

