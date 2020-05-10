import { test } from "tape";
import catMap from "./index";

test("catMap", (t) => {
  t.equal(
    catMap((v) => v + "B", ["A", "B"]),
    "ABBB"
  );
  t.end();
});
