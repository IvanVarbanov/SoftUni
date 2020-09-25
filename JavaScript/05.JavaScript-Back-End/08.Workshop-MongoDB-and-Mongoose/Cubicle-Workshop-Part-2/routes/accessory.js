const { Router } = require('express');
const accessoryController = require('../controllers/accessory');
const cubeController = require('../controllers/cube');

const router = Router();

router.get('/create/accessory', (req, res) => {
    res.render('createAccessory.hbs', {
        title: 'Create Accessory | Cube Workshop',
    });
});

router.post('/create/accessory', (req, res) => {
    const { name, description, imageUrl } = req.body;
    accessoryController.createAccessory(name, description, imageUrl);
    res.redirect('/create/accessory');
});

router.get('/attach/accessory/:id', async (req, res) => {
    const data = await accessoryController.accessoryToAttach(req.params.id);
    console.log(data);
    res.render('attachAccessory.hbs', {
        title: 'Attach Accessory | Cube Workshop',
        ...data,
    });
});

router.post('/attach/accessory/:id', async (req, res) => {
    await accessoryController.attachAccessory(req.params.id, req.body.accessory);
    await cubeController.attachAccessory(req.params.id, req.body.accessory);
    res.redirect(`/details/${req.params.id}`);
});

module.exports = router;
