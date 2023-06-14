import { rotateRover, performInstructions } from "../src/rover";

describe("test rotateRover function", () => {
  test(`should return same position but facing 90 degrees to the left`, () => {
    expect(rotateRover({ x: 1, y: 2, direction: "N" }, "L")).toEqual({
      x: 1,
      y: 2,
      direction: "W",
    });
  });
});

describe("test performInstructions function", () => {
  test(`should return end position as object {1,3,"N"}`, () => {
    expect(
      performInstructions(
        "LMLMLMLMM",
        { x: 1, y: 2, direction: "N" },
        { x: 5, y: 5 }
      )
    ).toEqual({ x: 1, y: 3, direction: "N" });
  });
});
