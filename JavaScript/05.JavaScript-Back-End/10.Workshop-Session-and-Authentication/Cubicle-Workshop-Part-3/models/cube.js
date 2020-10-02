const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000,
    },
    imageUrl: {
        type: String,
        required: true,
        minlength: 10,
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [
        {
            type: 'ObjectId',
            ref: 'Accessory',
        },
    ],
});

cubeSchema.path('imageUrl').validate(function (url) {
    return url.startsWith('http://') || url.startsWith('https://');
}, 'Image url is not valid');

module.exports = mongoose.model('Cube', cubeSchema);
