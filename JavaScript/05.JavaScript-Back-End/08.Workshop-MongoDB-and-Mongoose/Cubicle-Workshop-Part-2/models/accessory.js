const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    imageUrl: {
        type: String,
        required: true,
        minlength: 10,
    },
    cubes: [
        {
            type: 'ObjectId',
            ref: 'Cube',
        },
    ],
});

accessorySchema.path('imageUrl').validate(function (url) {
    return url.startsWith('http://') || url.startsWith('https://');
}, 'Image url is not valid');

module.exports = mongoose.model('Accessory', accessorySchema);
