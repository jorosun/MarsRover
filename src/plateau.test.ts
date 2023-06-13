import { setGridSize, createPosition } from "../src/plateau";
describe("test getGridSize function", () => {
  test("should create an object {x:5, y:5}", () => {
    expect(setGridSize("55")).toEqual({ x: 5, y: 5 });
  });
});
describe("test createPosition function", () => {
  test(`should create an object {1,2,"N"}`, () => {
    expect(createPosition("12N")).toEqual({ x: 1, y: 2, direction: "N" });
  });
});
