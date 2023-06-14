import {
  setGridSize,
  createPosition,
  performInstructions,
} from "../src/plateau";
{
  const sizeOfGrid = "55";
  const startingPosition = "12N";
  const instructions = "LMLMLMLMM";

  let theGrid = setGridSize(sizeOfGrid);
  console.log(theGrid);

  const startPosition = createPosition(startingPosition);
  console.log(startPosition);

  const endPosition = performInstructions(instructions, startPosition, theGrid);
  console.log(endPosition);
}
