import controllers from '../controllers/index.js';

// initialize the application
const app = Sammy('#root', function () {
    // include a plugin
    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', controllers.home.get.home);

    // User
    this.get('#/registration', controllers.user.get.registration);
    this.get('#/login', controllers.user.get.login);
    this.get('#/logout', controllers.user.get.logout);

    this.post('#/registration', controllers.user.post.registration);
    this.post('#/login', controllers.user.post.login);
});

// start the application
app.run('#/home');
