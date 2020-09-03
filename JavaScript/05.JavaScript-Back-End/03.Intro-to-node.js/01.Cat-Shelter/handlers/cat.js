const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/cats/add-cat' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addCat.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-type': 'text/plain',
                });

                res.write('Page not found!');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-type': 'text/html',
            });

            let catBreedPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</opiton>`);
            let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);

            res.write(modifiedData);
            res.end();
        });
    } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }
            const oldPath = files.upload.path;
            const newPath = path.normalize(path.join('./content/images', files.upload.name));

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    throw err;
                }
                console.log('Files was uploaded successfully');
            });

            fs.readFile('./data/cats.json', 'utf-8', (err, data) => {
                if (err) {
                    throw err;
                }

                const allCats = JSON.parse(data);
                allCats.push({ id: cats.length + 1, ...fields, image: files.upload.name });
                const json = JSON.stringify(allCats);
                fs.writeFile('./data/cats.json', json, () => {
                    res.writeHead(301, { location: '/' });
                    res.end();
                });
            });
        });
    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/addBreed.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-type': 'text/plain',
                });

                res.write('Page not found!');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-type': 'text/html',
            });

            res.write(data);
            res.end();
        });
    } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
        let formData = '';
        req.on('data', (data) => {
            formData += data;

            req.on('end', () => {
                let body = qs.parse(formData);

                fs.readFile('./data/breeds.json', (err, data) => {
                    if (err) {
                        throw err;
                    }

                    const breeds = JSON.parse(data);
                    breeds.push(body.breed);
                    const json = JSON.stringify(breeds);

                    fs.writeFile('./data/breeds.json', json, 'utf-8', () =>
                        console.log('The breed has been added successfully!')
                    );
                });

                res.writeHead(301, { location: '/' });
                res.end();
            });
        });
    } else if (pathname.startsWith('/cats-edit') && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/editCat.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-type': 'text/plain',
                });

                res.write('Page not found!');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-type': 'text/html',
            });

            let catBreedPlaceholder = ``;
            let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);

            res.write(data);
            res.end();
        });
    } else if (pathname.startsWith('/cats-edit') && req.method === 'POST') {
    } else if (pathname.startsWith('/cats-find-new-home') && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/catShelter.html'));

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-type': 'text/plain',
                });

                res.write('Page not found!');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-type': 'text/html',
            });

            res.write(data);
            res.end();
        });
    } else if (pathname.startsWith('/cats-find-new-home') && req.method === 'POST') {
    } else {
        return true;
    }
};
