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
    if (typeof args[0] === "function") {
        var fn = args[0], content_2 = args[1];
        return content_2 != null ? fn(content_2) : "";
    }
    var template = args[0], content = args[1];
    return content != null ? template : "";
});
