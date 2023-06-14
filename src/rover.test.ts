import { rotateRover } from "../src/rover";

describe("test rotateRover function", () => {
  test(`should return same position but facing 90 degrees to the left`, () => {
    expect(rotateRover({ x: 1, y: 2, direction: "N" }, "L")).toEqual({
      x: 1,
      y: 2,
      direction: "W",
    });
  });
});
