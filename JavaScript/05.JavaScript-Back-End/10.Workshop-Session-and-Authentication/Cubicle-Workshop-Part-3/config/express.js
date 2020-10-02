const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

module.exports = (app) => {
    //Setup the view engine
    app.engine('.hbs', handlebars({ extname: '.hbs' }));
    app.set('view engine', '.hbs');

    //Setup the body parser
    app.use(express.urlencoded({ extended: true }));

    //Setup the static files
    app.use('/static', express.static(path.resolve(__basedir, 'static')));
};
