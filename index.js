// Write your solution in this file!
const employee = Object.assign({}, {'name' : 'Larry', 'streetAddress' : '555 Blanco Street'});

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = Object.assign({}, {...employee, [key] : value});
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, {...employee});
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// I'm a little unsure if I'm supposed to be adding any new content to this assignment, or if I am just supposed to push it back into the repo as is.