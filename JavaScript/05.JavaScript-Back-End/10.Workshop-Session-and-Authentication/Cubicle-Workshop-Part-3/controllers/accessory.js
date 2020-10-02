const AccessoryModel = require('../models/accessory');
const cubeController = require('./cube');

const createAccessory = (name, description, imageUrl) => {
    const newAccessory = new AccessoryModel({ name, description, imageUrl });
    newAccessory.save((err) => {
        if (err) {
            console.log('Error:', err);
            throw err;
        }
        console.log('Successfully saved');
    });
};

const accessoryToAttach = async (cubeId) => {
    const cube = await cubeController.getCube(cubeId);
    const accessories = await AccessoryModel.find({ cubes: { $nin: cubeId } }).lean();
    return { cube, accessories };
};

const attachAccessory = async (cubeId, accessoryId) => {
    await AccessoryModel.findByIdAndUpdate(accessoryId, { $addToSet: { cubes: [cubeId] } });
};

module.exports = {
    createAccessory,
    accessoryToAttach,
    attachAccessory,
};
