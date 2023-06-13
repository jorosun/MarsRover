import { setGridSize } from "../src/plateau";
describe("test getGridSize function", () => {
  test("should create an array size 5 x 5", () => {
    expect(setGridSize("55")).toEqual({ x: 5, y: 5 });
  });
});
