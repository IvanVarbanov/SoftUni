import controllers from '../controllers/index.js';

// initialize the application
const app = Sammy('#main', function () {
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

    // About
    this.get('#/about', controllers.about.get.about);

    // Team
    this.get('#/catalog', controllers.team.get.catalog);
    this.get('#/catalog/:teamId', controllers.team.get.details);
    this.get('#/create', controllers.team.get.create);
    this.post('#/create', controllers.team.post.create);
    this.get('#/edit/:teamId', controllers.team.get.editTeam);
    this.post('#/edit/:teamId', controllers.team.post.editTeam);
    this.get('#/join/:teamId', controllers.team.get.joinTeam);
    this.get('#/leave/:teamId', controllers.team.get.leaveTeam);
});

// start the application
app.run('#/home');
