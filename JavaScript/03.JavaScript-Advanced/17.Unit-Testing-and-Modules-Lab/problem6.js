function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || red < 0 || red > 255) return undefined; // Red value is invalid
    if (!Number.isInteger(green) || green < 0 || green > 255) return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || blue < 0 || blue > 255) return undefined; // Blue value is invalid
    return (
        '#' +
        ('0' + red.toString(16).toUpperCase()).slice(-2) +
        ('0' + green.toString(16).toUpperCase()).slice(-2) +
        ('0' + blue.toString(16).toUpperCase()).slice(-2)
    );
}

let assert = require('chai').assert;

describe('rgbToHexColor()', () => {
    it('256, 255, 255 -> undefined', () => {
        let res = rgbToHexColor(256, 255, 255);
        assert.equal(res, undefined);
    });

    it('255, 256, 255 -> undefined', () => {
        let res = rgbToHexColor(256, 265, 255);
        assert.equal(res, undefined);
    });

    it('256, 255, 256 -> undefined', () => {
        let res = rgbToHexColor(256, 255, 256);
        assert.equal(res, undefined);
    });

    it('-5, 255, 256 -> undefined', () => {
        let res = rgbToHexColor(-5, 255, 256);
        assert.equal(res, undefined);
    });

    it('255, -5, 256 -> undefined', () => {
        let res = rgbToHexColor(255, -5, 256);
        assert.equal(res, undefined);
    });

    it('255, 255, -5 -> undefined', () => {
        let res = rgbToHexColor(255, 255, -5);
        assert.equal(res, undefined);
    });

    it('0, 0, 0 -> undefined', () => {
        let res = rgbToHexColor(0, 0, 0);
        assert.equal(res, '#000000');
    });

    it('255, 255, 255 -> undefined', () => {
        let res = rgbToHexColor(255, 255, 255);
        assert.equal(res, '#FFFFFF');
    });
});
