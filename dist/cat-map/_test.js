"use strict";
exports.__esModule = true;
var tape_1 = require("tape");
var index_1 = require("./index");
tape_1.test("catMap", function (t) {
    t.equal(index_1["default"](function (v) { return v + "B"; }, ["A", "B"]), "ABBB");
    t.end();
});
