class Forum {
    #users = [];
    #questions = [];
    #id = 1;

    register(username, password, repeatPassword, email) {
        if (
            username === '' ||
            username === undefined ||
            password === '' ||
            password === undefined ||
            repeatPassword === '' ||
            repeatPassword === undefined ||
            email === '' ||
            email === undefined
        ) {
            throw Error('Input can not be empty');
        }

        if (password !== repeatPassword) {
            throw Error('Passwords do not match');
        }

        let isNew = true;
        for (const user of this.#users) {
            if (user.username === username) {
                isNew = false;
                break;
            }
        }

        if (isNew) {
            this.#users.push({
                username,
                password,
                email,
                login: false,
            });

            return `${username} with ${email} was registered successfully!`;
        } else {
            throw Error('This user already exists!');
        }
    }

    login(username, password) {
        let isExist = false;
        let matchPass = false;
        for (const user of this.#users) {
            if (user.username === username) {
                isExist = true;
                if (user.password === password) {
                    matchPass = true;
                    user.login = true;
                }
                break;
            }
        }

        if (isExist === false) {
            throw Error('There is no such user');
        }

        if (isExist && matchPass) {
            return 'Hello! You have logged in successfully';
        }
    }

    logout(username, password) {
        let isExist = false;
        let matchPass = false;
        for (const user of this.#users) {
            if (user.username === username) {
                isExist = true;
                if (user.password === password) {
                    matchPass = true;
                    user.login = false;
                }
                break;
            }
        }

        if (isExist === false) {
            throw Error('There is no such user');
        }

        if (isExist && matchPass) {
            return 'You have logged out successfully';
        }
    }

    isLog(username) {
        let isLog = false;
        for (const user of this.#users) {
            if (user.username === username && user.login === true) {
                isLog = true;
                break;
            }
        }

        return isLog;
    }

    postQuestion(username, question) {
        if (!question) throw Error('Invalid question');

        if (this.isLog(username)) {
            this.#questions.push({
                q: question,
                id: this.#id++,
                username,
                a: [],
            });
            return 'Your question has been posted successfully';
        } else {
            throw Error('You should be logged in to post questions');
        }
    }

    postAnswer(username, questionId, answer) {
        if (!answer) {
            throw Error('Invalid answer');
        }

        let isquestionIdExist = false;
        let question;
        for (const q of this.#questions) {
            if (q.id === Number(questionId)) {
                question = q;
                isquestionIdExist = true;
            }
        }

        if (!isquestionIdExist) {
            throw Error('There is no such question');
        }

        if (this.isLog(username)) {
            question.a.push({
                username,
                answer,
            });
            return 'Your answer has been posted successfully';
        } else {
            throw Error('You should be logged in to post answers');
        }
    }

    showQuestions() {
        let output = [];
        this.#questions.forEach((q) => {
            // console.log(q);
            output.push([`Question ${q.id} by ${q.username}: ${q.q}`]);
            q.a.forEach((a) => {
                output.push([`---${a.username}: ${a.answer}`]);
            });
        });

        return output.join('\n');
    }
}

let forum = new Forum();

forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum.login('Jonny', '12345');
forum.login('Peter', '123ab7');

forum.postQuestion('Jonny', 'Do I need glasses for skiing?');
forum.postAnswer('Peter', 1, 'Yes, I have rented one last year.');
forum.postAnswer('Jonny', 1, 'What was your budget');
forum.postAnswer('Peter', 1, '$50');
forum.postAnswer('Jonny', 1, 'Thank you :)');

console.log(forum.showQuestions());
