const env = process.env.NODE_ENV || 'development';
global.__basedir = __dirname;

// Testing models
// const cubeModel = require('./models/cube');
// cubeModel.insert({ name: 'ivan', nesho: 'Pesho' });
// cubeModel.delete(1);
// cubeModel.update(2, { name: 'slivcho', neshodrugo: 'plasko' });

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));
