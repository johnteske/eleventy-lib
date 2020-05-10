"use strict";
exports.__esModule = true;
var tape_1 = require("tape");
var index_1 = require("./index");
tape_1.test("maybe", function (t) {
    t.throws(function () { return index_1["default"](); });
    t.throws(function () { return index_1["default"](1, 2, 3); });
    t.equal(index_1["default"]("TEST"), "TEST");
    t.equal(index_1["default"](undefined), "");
    t.equal(index_1["default"](function (s) { return s.toLowerCase(); }, "TEST"), "test");
    t.equal(index_1["default"]("t e s t", "TEST"), "t e s t");
    t.end();
});
