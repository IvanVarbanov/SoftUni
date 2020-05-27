function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.subject = course;
        }
    }

    return { Person, Teacher };
}
