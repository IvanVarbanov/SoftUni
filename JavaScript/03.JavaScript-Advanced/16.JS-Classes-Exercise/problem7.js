class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = checkClientId(clientId);
        this.email = checkEmail(email);
        this.firstName = checkName('firstName', firstName);
        this.lastName = checkName('lastName', lastName);

        function checkClientId(clientId) {
            let clientIdPattern = /^[0-9]{6}$/gm;
            if (clientIdPattern.test(clientId) && typeof clientId === 'string') {
                return clientId;
            } else {
                throw new TypeError('Client ID must be a 6-digit number');
            }
        }

        function checkEmail(email) {
            let emailPattern = /[A-za-z0-9]+@[A-za-z0-9]+\.[a-zA-z]+/gm;
            if (emailPattern.test(email)) {
                return email;
            } else {
                throw new TypeError('Invalid e-mail');
            }
        }

        function checkName(nameType, name) {
            if (nameType === 'firstName') {
                nameType = 'First name';
            } else {
                nameType = 'Last name';
            }

            let namePattern = /^[A-za-z]{3,20}$/gm;
            if (namePattern.test(name)) {
                return name;
            } else {
                throw new TypeError(`${nameType} must be between 3 and 20 characters long`);
            }
        }
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
