import { createPlateau } from "../src/plateau";
describe("test createPlateau function", () => {
  test("should create an array size 5 x 5", () => {
    expect(createPlateau("55")).toEqual({ x: 5, y: 5 });
  });
});
