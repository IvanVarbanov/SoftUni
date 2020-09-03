const fileManager = require('./file-manager');

fileManager.readUsers(cb);

function cb(err, res) {
    if (err) {
        return console.error(err);
    }

    return console.log(res);
}

console.log('Hello World!');
