class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        if (!name || (!salary && salary >= 0) || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        let isNewDepartment = true;
        for (const dep of this.departments) {
            if (dep.department === department) {
                isNewDepartment = false;
                dep.employes.push({
                    name,
                    salary,
                    position,
                });
            }
        }

        if (isNewDepartment) {
            this.departments.push({
                department,
                employes: [
                    {
                        name,
                        salary,
                        position,
                    },
                ],
            });
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = this.departments.sort((a, b) => {
            let averageSalaryOfA =
                a.employes.reduce((acc, cur) => {
                    return acc + Number(cur.salary);
                }, 0) / a.employes.length;

            let averageSalaryOfB =
                b.employes.reduce((acc, cur) => {
                    return acc + Number(cur.salary);
                }, 0) / b.employes.length;

            return averageSalaryOfB - averageSalaryOfA;
        })[0];

        let averageSalary =
            bestDepartment.employes.reduce((a, c) => a + Number(c.salary), 0) / bestDepartment.employes.length;

        let output = [
            `Best Department is: ${bestDepartment.department}`,
            `Average salary: ${averageSalary.toFixed(2)}`,
        ];

        bestDepartment.employes
            .sort((a, b) => b.salary - a.salary)
            .forEach((empl) => {
                output.push(`${empl.name} ${empl.salary} ${empl.position}`);
            });

        return output.join('\n');
    }

    show() {
        console.log(this.departments);
    }
}

let c = new Company();

c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');

console.log(c.bestDepartment());
