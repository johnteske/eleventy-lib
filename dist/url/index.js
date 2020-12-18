"use strict";
exports.__esModule = true;
var base = function (baseUrl, url) {
    return ("/" + baseUrl + "/" + url).replace(/\/+/g, "/");
};
var asset = function (baseUrl, url) { return base(baseUrl, "assets" + url); };
exports["default"] = {
    base: base,
    asset: asset
};
