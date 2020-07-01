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
    this.get('#/profile', controllers.user.get.profile);

    this.post('#/registration', controllers.user.post.registration);
    this.post('#/login', controllers.user.post.login);

    // Trekks
    this.get('#/create', controllers.trek.get.create);
    this.post('#/create', controllers.trek.post.create);
    this.get('#/details/:trekId', controllers.trek.get.details);
    this.get('#/edit/:trekId', controllers.trek.get.edit);
    this.post('#/edit/:trekId', controllers.trek.post.edit);
    this.get('#/delete/:trekId', controllers.trek.get.delete);
    this.get('#/like/:trekId', controllers.trek.get.like);
});

// start the application
app.run('#/home');
