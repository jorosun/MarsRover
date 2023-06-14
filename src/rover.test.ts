import { rotateRover, moveRover, performInstructions } from "../src/rover";

describe("test rotateRover function", () => {
  test(`should return same position but facing 90 degrees to the left`, () => {
    expect(rotateRover({ x: 1, y: 2, direction: "N" }, "L")).toEqual({
      x: 1,
      y: 2,
      direction: "W",
    });
  });

  test(`should return same position but facing 90 degrees to the right`, () => {
    expect(rotateRover({ x: 1, y: 2, direction: "N" }, "R")).toEqual({
      x: 1,
      y: 2,
      direction: "E",
    });
  });
});

describe("test moveRover function", () => {
  test(`should move north if in position {0,0} facing north`, () => {
    expect(moveRover({ x: 0, y: 0, direction: "N" }, { x: 5, y: 5 })).toEqual({
      x: 0,
      y: 1,
      direction: "N",
    });
  });

  test(`should move west if in position {0,0} facing west`, () => {
    expect(moveRover({ x: 0, y: 0, direction: "W" }, { x: 5, y: 5 })).toEqual({
      x: 0,
      y: 0,
      direction: "W",
    });
  });
  test(`shouldn't move south if in position {0,0} facing south`, () => {
    expect(moveRover({ x: 0, y: 0, direction: "S" }, { x: 5, y: 5 })).toEqual({
      x: 0,
      y: 0,
      direction: "S",
    });
  });

  test(`shouldn't move east if in position {5,0} facing east`, () => {
    expect(moveRover({ x: 5, y: 0, direction: "E" }, { x: 5, y: 5 })).toEqual({
      x: 5,
      y: 0,
      direction: "E",
    });
  });

  test(`shouldn't move south if in position {3,0} facing south`, () => {
    expect(moveRover({ x: 3, y: 0, direction: "S" }, { x: 5, y: 5 })).toEqual({
      x: 3,
      y: 0,
      direction: "S",
    });
  });

  test(`shouldn't move east if in position {5,5} facing east`, () => {
    expect(moveRover({ x: 5, y: 5, direction: "E" }, { x: 5, y: 5 })).toEqual({
      x: 5,
      y: 5,
      direction: "E",
    });
  });

  test(`shouldn't move north if in position {5,5} facing north`, () => {
    expect(moveRover({ x: 5, y: 5, direction: "N" }, { x: 5, y: 5 })).toEqual({
      x: 5,
      y: 5,
      direction: "N",
    });
  });

  test(`should move west if in position {5,5} facing west`, () => {
    expect(moveRover({ x: 5, y: 5, direction: "W" }, { x: 5, y: 5 })).toEqual({
      x: 4,
      y: 5,
      direction: "W",
    });
  });

  test(`should move south if in position {5,5} facing south`, () => {
    expect(moveRover({ x: 5, y: 5, direction: "S" }, { x: 5, y: 5 })).toEqual({
      x: 5,
      y: 4,
      direction: "S",
    });
  });

  test(`shouldn't move north if in position {0,5} facing north`, () => {
    expect(moveRover({ x: 0, y: 5, direction: "N" }, { x: 5, y: 5 })).toEqual({
      x: 0,
      y: 5,
      direction: "N",
    });
  });

  test(`shouldn't move west if in position {0,5} facing west`, () => {
    expect(moveRover({ x: 0, y: 5, direction: "W" }, { x: 5, y: 5 })).toEqual({
      x: 0,
      y: 5,
      direction: "W",
    });
  });

  test(`should move east if in position {0,3} facing east`, () => {
    expect(moveRover({ x: 0, y: 3, direction: "E" }, { x: 5, y: 5 })).toEqual({
      x: 1,
      y: 3,
      direction: "E",
    });
  });
});

describe("test performInstructions function", () => {
  test(`should return end position as object {2,3,"W"} if starting at {3,3,"N"} with instruction "LM"`, () => {
    expect(
      performInstructions("LM", { x: 3, y: 3, direction: "N" }, { x: 5, y: 5 })
    ).toEqual({ x: 2, y: 3, direction: "W" });
  });

  test(`should return end position as object {2,2,"S"} if starting at {3,3,"N"} with instruction "LMLM"`, () => {
    expect(
      performInstructions(
        "LMLM",
        { x: 3, y: 3, direction: "N" },
        { x: 5, y: 5 }
      )
    ).toEqual({ x: 2, y: 2, direction: "S" });
  });
});
