import { clear, print, askQuestion, displayText } from "./ui/console";
import { setGridSize, createPosition } from "../src/plateau";
import { performInstructions } from "../src/rover";
import {
  welcomeToMarsRover,
  getGridSize,
  getStartingPosition,
  getInstructions,
  endMarsRover,
} from "../src/ui/user-interface";

{
  welcomeToMarsRover();
  const sizeOfGrid = askQuestion(`What size is the plateau? `, getGridSize);
  const startingPosition = askQuestion(
    "Please enter starting positon: ",
    getStartingPosition
  );
  const instructionString = askQuestion(
    "Please enter Instructions for the Rover: ",
    getInstructions
  );

  if (
    sizeOfGrid === undefined ||
    startingPosition === undefined ||
    instructionString === undefined
  ) {
    endMarsRover();
  } else {
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
}
