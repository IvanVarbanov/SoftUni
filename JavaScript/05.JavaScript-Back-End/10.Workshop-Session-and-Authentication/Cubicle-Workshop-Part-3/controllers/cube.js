const CubeModel = require('../models/cube');

const getCubes = async () => {
    return await CubeModel.find().lean();
};

const getCube = async (id) => {
    return await CubeModel.findById(id, (err) => {
        if (err) {
            console.log('Error:', err);
            throw err;
        }
    })
        .populate('accessories')
        .lean();
};

const getCubeWithAccessories = async (id) => {
    return await CubeModel.findById(id, (err) => {
        if (err) {
            console.log('Error:', err);
            throw err;
        }
    })
        .populate('accessories')
        .lean();
};

const addCube = (name, description, imageUrl, difficulty) => {
    const newCube = new CubeModel({ name, description, imageUrl, difficulty });

    newCube.save((err) => {
        if (err) {
            console.log('Error:', err);
            throw err;
        }

        console.log('Successfully saved');
    });
};

const attachAccessory = async (cubeId, accessoryId) => {
    await CubeModel.findByIdAndUpdate(cubeId, { $addToSet: { accessories: [accessoryId] } });
};

module.exports = {
    getCubes,
    getCube,
    getCubeWithAccessories,
    addCube,
    attachAccessory,
};
