<<<<<<< HEAD
console.log('TODO...');
=======
const BASE_URL = 'https://students-softuni-jsapp.firebaseio.com/';
const makeUrl = (param) => `${BASE_URL}${param}.json`;

const elements = {
    loadButton: () => document.getElementById('loadStudents'),
    resultsTable: () => document.getElementById('results'),
    messagesContainer: () => document.getElementById('messages'),
    firstNameInput: () => document.getElementById('firstName'),
    lastnameInput: () => document.getElementById('lastname'),
    facultyNumberInput: () => document.getElementById('facultyNumber'),
    gradeInput: () => document.getElementById('grade'),
    addStudentButton: () => document.getElementById('add-book'),
};

elements.loadButton().addEventListener('click', loadAllStudents);
elements.addStudentButton().addEventListener('click', addNewStudent);

async function loadAllStudents() {
    let tbody = elements.resultsTable().getElementsByTagName('tbody')[0];
    try {
        let response = await fetch(makeUrl('students'));
        let data = await response.json();

        if (response.ok) {
            successMessage('You have successfully load all students.');
        }
        tbody.innerHTML = '';
        Object.keys(data).forEach((key) => {
            if (data[key] !== null) {
                tbody.innerHTML += render(
                    key,
                    data[key].id,
                    data[key].firstname,
                    data[key].lastname,
                    data[key].facultynumber,
                    data[key].grade
                );
            }
        });

        console.log(data);
    } catch (error) {
        handleError(error);
    }
}

function render(key, id, firstName, lastName, FacultyNumber, grade) {
    return `
    <tr data-id="${key}">
        <td>${id}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${FacultyNumber}</td>
        <td>${grade}</td>
    </tr>
    `;
}

function handleError(error) {
    let errorContainer = elements.messagesContainer();
    errorContainer.style = 'display:block; text-align:center;';
    let div = document.createElement('div');
    div.style = 'color:red;';
    div.innerText = error;
    errorContainer.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 5 * 1000);
}

function successMessage(message) {
    let successMessageContainer = elements.messagesContainer();
    successMessageContainer.style = 'display:block; text-align:center;';
    let div = document.createElement('div');
    div.style = 'color:darkgreen;';
    div.innerText = message;
    successMessageContainer.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 5 * 1000);
}
>>>>>>> 5fe8c7e80714f8f75b1fcbab32641d65af4ccd9b
