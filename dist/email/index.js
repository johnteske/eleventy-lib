"use strict";
exports.__esModule = true;
/**
 * @param {string} email - email address
 * @param {string} fingerprint - as listed on keys.openpgp.org
 */
exports["default"] = (function (email, fingerprint) {
    "<a href=\"" + email + "\">" + email + "</a>\n  (<a href=\"https://keys.openpgp.org/vks/v1/by-fingerprint/" + fingerprint + "\" rel=\"publickey\" title=\"" + email + "\" type=\"text/plain\">PGP</a>)";
});
