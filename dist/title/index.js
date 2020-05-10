"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.filter(Boolean).join(" - ");
});
