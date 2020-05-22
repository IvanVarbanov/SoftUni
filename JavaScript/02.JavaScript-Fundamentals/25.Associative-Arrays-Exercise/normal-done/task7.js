function companyUsers(array = []) {
    let companyUsersList = new Map();

    for (const companyUser of array) {
        let [company, user] = companyUser.split(" -> ");

        if (companyUsersList.has(company)) {
            companyUsersList.set(company, companyUsersList.get(company).add(user));
        } else {
            companyUsersList.set(company, new Set().add(user));
        }
    }

    let sortedUserList = Array.from(companyUsersList).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    });

    for (const company of sortedUserList) {
        console.log(company[0]);
        for (const user of company[1]) {
            console.log(`-- ${user}`);
        }
    }
}

companyUsers([
    "SoftUni -> AA12345",
    "SoftUni -> CC12344",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111",
]);
