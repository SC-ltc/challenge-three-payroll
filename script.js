// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Array for the employee names and salary to be stored
const arrayofemployees = []

//Loop until user chooses to stop entering employees
let enterInfo = true

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // The "Prompt" method instructs the browser to display a dialog asking the user to imput text
  // Office hours 7/17/24 - Instructor Luigi Campbell demonstrated using the parseFloat function on the salary variable.
  // average salary was not calculating correctly for me. parseFloat was needed to turn salary into a floating point number. Adding parseFloat to line 19 resolved the issue. 
  while (enterInfo) {
    const firstName = prompt(`Please enter the employee's first name`);
    const lastName = prompt(`Plese enter the employee's last name`);
    const salary = parseFloat(prompt(`Please enter the employee's salary`));

    //Per the challenge instructions, the salary must be entered as a number, otherwise it should default to 0
    if(isNaN(salary)) {
      salary = 0;
    };

    //Assisted by Xpert Learning Assistant
    //Creating an object so that we can place all the entered employee info into one object then use the Push method to push the object into the array
    const employeeinfo = {firstName, lastName, salary};

    arrayofemployees.push(employeeinfo)

    //Ask user if they want to enter another employee
    //The "confirm" method instructs the browser to display a dialog and waits for the user to confirm or cancel the dialog
    //If the user selects 'cancel' then that ends the loop
    enterInfo = confirm(`Would you like to enter another employee?`);

  }
  return arrayofemployees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
let totalSalary = 0
for(let i=0; i < arrayofemployees.length; i++){
  totalSalary += arrayofemployees[i].salary;
  }

  //The average salary was sometimes displaying too many numbers after the decimal.
  //I found the 'toFixed' method after searching how to limit the number of decimal places displayed.
  const avgSalary = (totalSalary / arrayofemployees.length).toFixed(2);
  console.log(`The average salary of our ${arrayofemployees.length} employees is $${avgSalary}`)
}

// Select a random employee
//Referenced script.js lines 50-54 of the solved student mini project in Module 3
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randEmploy = Math.floor(Math.random() * arrayofemployees.length)
  const winner = arrayofemployees[randEmploy]
  console.log(`Congratulations to ${winner.firstName} ${winner.lastName}, our random drawing winner!`)
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
