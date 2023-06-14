import { setGridSize, createPosition } from "../src/plateau";
{
  const sizeOfGrid = "55";
  const startingPosition = "12N";
  const instructions = "LMLMLMLMM";

  let theGrid = setGridSize(sizeOfGrid);
  console.log(theGrid);

  const currentPosition = createPosition(startingPosition);
  console.log(currentPosition);
}
