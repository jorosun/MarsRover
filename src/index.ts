import { setGridSize, createPosition } from "../src/plateau";

import { performInstructions } from "../src/rover";
import {
  getGridSize,
  getInstructions,
  getStartingPosition,
  welcomeToMarsRover,
} from "../src/ui/user-interface";

{
  //WelcomeToMarsRover();
  const sizeOfGrid = getGridSize();
  const startingPosition = getStartingPosition();
  const instructionString = getInstructions();

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
