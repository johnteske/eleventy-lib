import { test } from "tape";
import { maybe } from "../dist/index";

test("maybe", (t) => {
  t.throws(() => maybe());
  t.throws(() => maybe(1, 2, 3));

  t.equal(maybe("TEST"), "TEST");
  t.equal(maybe(undefined), "");

  t.equal(
    maybe((s) => s.toLowerCase(), "TEST"),
    "test"
  );
  t.equal(maybe(`t e s t`, "TEST"), "t e s t");

  t.end();
});
