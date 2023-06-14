import { setGridSize, createPosition } from "../src/plateau";

import { performInstructions } from "../src/rover";

{
  const sizeOfGrid = "55";
  const startingPosition = "12N";
  const instructionString = "LMLMLMLMM";

  const theGrid = setGridSize(sizeOfGrid);
  console.log(`Grid Size is `, theGrid);

  const startPosition = createPosition(startingPosition);
  console.log(`Starting Position is :`, startPosition);

  console.log(`Instructions are :`, instructionString);

  const endPosition = performInstructions(
    instructionString,
    startPosition,
    theGrid
  );
  console.log(`End Position is:`, endPosition);
}
