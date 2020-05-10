"use strict";
exports.__esModule = true;
var tape_1 = require("tape");
var index_1 = require("./index");
tape_1.test("title", function (t) {
    t.equal(index_1["default"]("A", "B"), "A - B");
    t.end();
});
