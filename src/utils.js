"use strict";
exports.__esModule = true;
exports.getValue = void 0;
var vue_1 = require("vue");
var getValue = function () {
    var getter = vue_1.inject("FakeValue");
    return getter;
};
exports.getValue = getValue;
