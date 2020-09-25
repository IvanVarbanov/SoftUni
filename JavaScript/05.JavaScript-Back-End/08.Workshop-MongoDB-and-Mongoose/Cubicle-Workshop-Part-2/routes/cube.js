const { Router } = require('express');
const cubeController = require('../controllers/cube');

const router = Router();

router.get('/create', (req, res) => {
    res.render('create.hbs', {
        title: 'Create cube | Cube Workshop',
    });
});

router.post('/create', (req, res) => {
    const { name, description, imageUrl, difficultyLevel: difficulty } = req.body;

    cubeController.addCube(name, description, imageUrl, difficulty);

    res.redirect('/');
});

router.get('/details/:id', async (req, res) => {
    const cube = await cubeController.getCube(req.params.id);
    res.render('details.hbs', {
        title: `${cube.name} | Cube Workshop`,
        ...cube,
    });
});

module.exports = router;
