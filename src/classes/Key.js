"use strict";
exports.__esModule = true;
exports.Key = void 0;
var Key = /** @class */ (function () {
    function Key(num) {
        this.numericalKey = num;
    }
    Key.prototype.equals = function (sample) {
        return sample.toNumber() === this.numericalKey;
    };
    Key.prototype.toNumber = function () {
        return this.numericalKey;
    };
    return Key;
}());
exports.Key = Key;
