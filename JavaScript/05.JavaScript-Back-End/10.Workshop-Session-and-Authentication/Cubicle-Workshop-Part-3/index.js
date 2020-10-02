global.__basedir = __dirname;

const mongoose = require('mongoose');
const express = require('express');
const config = require('./config/config');
const router = require('./routes/index');

const app = express();

mongoose.connect(
    config.databaseUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
        console.log('Database is setup and running');
    }
);

require('./config/express')(app);

app.use('/', router.commonRouter);
app.use('/', router.cubeRouter);
app.use('/', router.accessoryRouter);

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error | Cube Workshop',
    });
});

app.listen(config.port, console.log(`Server running at http://localhost:${config.port}`));
