import { createPlateau } from "../src/plateau";
describe("test createPlateau function", () => {
  it("should create an array size 5 x 5", () => {
    const actual = createPlateau("55");
    expect(actual).toEqual({ x: 5, y: 5 });
  });
});
