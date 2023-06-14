import { setGridSize, createPosition } from "../src/plateau";

import { performInstructions } from "../src/rover";

{
  const sizeOfGrid = "55";
  const startingPosition = "12N";
  const instructionString = "LMLMLMLMM";

  const theGrid = setGridSize(sizeOfGrid);
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
