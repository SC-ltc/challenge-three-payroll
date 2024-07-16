// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Array for the employee info
let arrayofemployees = []

//Loop until user chooses to stop entering employees
let enterInfo = true

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  
  while (enterInfo) {
    let firstName = prompt(`Please enter the employee's first name`);
    let lastName = prompt(`Plese enter the employee's last name`);
    let salary = prompt(`Please enter the employee's salary`);

    if(isNaN(salary)) {
      salary = 0;
    };

    //Creating object so the entered employee info can be pushed into the array
    const employeeinfo = {
      FirstName:firstName,
      LastName:lastName,
      Salary:salary
    };

    arrayofemployees.push(employeeinfo);

    //Ask user if they want to enter another employee
    enterInfo = confirm('Would you like to enter another employee?');

  }
  return arrayofemployees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
