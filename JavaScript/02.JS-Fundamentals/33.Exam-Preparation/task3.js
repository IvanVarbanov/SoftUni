function inboxManager(array = []) {
    let manager = new Map();

    for (const line of array) {
        let [command, username, email] = line.split("->");

        if (command === "Add") {
            addUser(manager, username);
        } else if (command === "Send") {
            sendEmail(manager, username, email);
        } else if (command === "Delete") {
            deleteUser(manager, username);
        } else {
            console.log(`Users count: ${manager.size}`);
        }
    }

    let sortable = Array.from(manager).sort((a, b) => {
        if (a[1].length == b[1].length) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].length - a[1].length;
        }
    });

    for (const user of sortable) {
        console.log(user[0]);
        for (const email of user[1]) {
            console.log(` - ${email}`);
        }
    }

    // console.log(sortable);

    // console.log(manager);

    function sendEmail(manager, username, email) {
        manager.get(username).push(email).sort;
    }

    function deleteUser(manager, username) {
        if (manager.has(username)) {
            manager.delete(username);
        } else {
            console.log(`${username} not found!`);
        }
    }

    function addUser(manager = new Map(), username) {
        if (manager.has(username)) {
            console.log(`${username} is already registered`);
        } else {
            manager.set(username, []);
        }
    }
}

inboxManager([
    "Add->Mike",
    "Add->George",
    "Send->George->Hello World",
    "Send->George->Some random test mail",
    "Send->Mike->Hello, do you want to meet up tomorrow?",
    "Send->George->It would be a pleasure",
    "Send->Mike->Another random test mail",
    "Statistics",
]);
// console.log();
// inboxManager([
//     "Add->Mike",
//     "Add->George",
//     "Send->George->Hello World",
//     "Send->George->Your loan is overdue",
//     "Add->Mike",
//     "Send->Mike->Hello, do you want to meet up tomorrow?",
//     "Delete->Peter",
//     "Send->George->I'm busy",
//     "Send->Mike->Another random test mail",
//     "Delete->George",
//     "Statistics",
// ]);
// console.log();
// inboxManager([
//     "Add->Annie",
//     "Add->George",
//     "Send->George->Hello World",
//     "Send->George->Some random test mail",
//     "Send->Annie->Hello, do you want to meet up tomorrow?",
//     "Send->George->It would be a pleasure",
//     "Send->Annie->Another random test mail",
//     "Delete->Annie",
//     "Delete->George",
//     "Statistics",
// ]);
