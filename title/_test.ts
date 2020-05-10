import { test } from "tape";
import title from "./index";

test("title", (t) => {
  t.equal(title("A", "B"), "A - B");
  t.end();
});
