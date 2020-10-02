const { Router } = require('express');
const cubeController = require('../controllers/cube');

const router = Router();

router.get('/', async (req, res) => {
    const cubes = await cubeController.getCubes();
    res.render('index.hbs', {
        title: 'Browse | Cube Workshop',
        cubes,
    });
});

router.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About | Cube Workshop',
    });
});

module.exports = router;
