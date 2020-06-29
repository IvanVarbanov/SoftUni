import controllers from '../controllers/index.js';

// initialize the application
const app = Sammy('#container', function () {
    // include a plugin
    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', controllers.home.get.home);

    //User
    this.get('#/registration', controllers.user.get.registration);
    this.get('#/login', controllers.user.get.login);
    this.get('#/logout', controllers.user.get.logout);

    this.post('#/registration', controllers.user.post.registration);
    this.post('#/login', controllers.user.post.login);

    //furniture
    this.get('#/all-furtniture', controllers.furniture.get.all);
    this.get('#/creater-furtniture', controllers.furniture.get.create);
    this.get('#/mine-furtniture', controllers.furniture.get.mine);
    this.get('#/furtniture/details/:furnitureID', controllers.furniture.get.details);
    this.get('#/furtniture/delete/:furnitureID', controllers.furniture.get.delete);

    this.post('#/creater-furtniture', controllers.furniture.post.create);
});

// start the application
app.run('#/home');
