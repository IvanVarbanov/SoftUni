function employees(array = []) {
    let employees = [];

    class Employee {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
    }

    //Връща дължината на името
    function nameLength(employeeName) {
        return employeeName.length;
    }

    for (let i = 0; i < array.length; i++) {
        let personalNum = nameLength(array[i]);
        employees.push(new Employee(array[i], personalNum));
    }

    for (const key of employees) {
        console.log(`Name: ${key.employeeName} -- Personal Number: ${key.personalNum}`);
    }
}

employees(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
