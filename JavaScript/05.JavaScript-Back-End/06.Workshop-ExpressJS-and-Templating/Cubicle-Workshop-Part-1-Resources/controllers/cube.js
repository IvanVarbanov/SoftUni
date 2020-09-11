const cubeModel = require('../models/cube');

function index(req, res) {
    cubeModel.getAll().then((cubes) => {
        res.render('index.hbs', { cubes });
    });
}

function getCreate(req, res) {
    res.render('create.hbs');
}

function postCreate(req, res) {
    cubeModel.insert(req.body).then((newCube) => {
        res.redirect('/');
    });
}

function about(req, res) {
    res.render('about.hbs');
}

function details(req, res) {
    cubeModel.getOne(+req.params.id).then((cube) => {
        if (!cube) {
            notFound(req, res);
            return;
        }
        res.render('details.hbs', { cube });
    });
}

function notFound(req, res) {
    res.render('404.hbs');
}

module.exports = {
    index,
    getCreate,
    postCreate,
    about,
    details,
    notFound,
};
