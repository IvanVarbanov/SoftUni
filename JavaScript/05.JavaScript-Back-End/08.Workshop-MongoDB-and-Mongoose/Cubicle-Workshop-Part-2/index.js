global.__basedir = __dirname;
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const app = require('express')();
const config = require('./config/config')[env];
const indexRouter = require('./routes');
const cubeRouter = require('./routes/cube');
const accessoryRouter = require('./routes/accessory');

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

app.use('/', indexRouter);
app.use('/', cubeRouter);
app.use('/', accessoryRouter);

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error | Cube Workshop',
    });
});

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
