import { test } from "tape";
import { catMap } from "../dist/index";

test("catMap", (t) => {
  t.equal(
    catMap((v) => v + "B", ["A", "B"]),
    "ABBB"
  );
  t.end();
});
