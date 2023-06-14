import {
  setGridSize,
  createPosition,
  performInstructions,
} from "../src/plateau";
{
  const sizeOfGrid = "55";
  const startingPosition = "12N";
  const instructionString = "LMLMLMLMM";

  let theGrid = setGridSize(sizeOfGrid);
  console.log(theGrid);

  const startPosition = createPosition(startingPosition);
  console.log(startPosition);

  const endPosition = performInstructions(
    instructionString,
    startPosition,
    theGrid
  );
  console.log(endPosition);
}
