const url = require('url');
const fs = require('fs');
const path = require('path');

function getContentType(url) {
    const contentTypesMap = {
        '.css': 'text/css',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.ico': 'image/ico',
    };

    const contentType = contentTypesMap[path.extname(url)];

    if (contentType) {
        return contentType;
    } else {
        return true;
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname.startsWith('/content') && req.method === 'GET') {
        fs.readFile(`./${pathname}`, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-type': getContentType(pathname),
                });
                res.write('Page not found!');
                res.end();
                return;
            }
            res.writeHead(200, {
                'Content-type': getContentType(pathname),
            });
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
};
