"use strict";
exports.__esModule = true;
var withBaseUrl = function (site, url) {
    return ("/" + site.baseUrl + "/" + url).replace(/\/+/g, "/");
};
var withAssetUrl = function (site, url) {
    return withBaseUrl(site, "assets" + url);
};
exports["default"] = {
    withBaseUrl: withBaseUrl,
    withAssetUrl: withAssetUrl
};
