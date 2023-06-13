import { createPlateau } from "../src/plateau";
describe("test createPlateau function", () => {
  it("should create an array size 5 x 5", () => {
    expect(createPlateau(5)).toBe(5);
  });
});
