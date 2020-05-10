"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var len = args.length;
    if (len === 0 || len > 2) {
        throw new Error("Invalid number of arguments");
    }
    if (len === 1) {
        var content_1 = args[0];
        return content_1 != null ? content_1 : "";
    }
    var fn = args[0], content = args[1];
    return content != null ? fn(content) : "";
});
