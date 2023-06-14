import { clear, print, askQuestion } from "./console";

export function welcomeToMarsRover(): void {
  clear(false);
  print("----------------------------");
  print("| Welcome to the Mars Rover|");
  print("----------------------------");
  askQuestion(`What size is the plateau? `, getGridSize);
}
function failImmediately() {
  clear(false);
  return endMarsRover();
}

export function endMarsRover(): void {
  print("***************************************");
  print("You failed to input the correct data to the Mars Rover😭");
  askQuestion("Press ENTER to restart! ", welcomeToMarsRover);
}

export function getGridSize(): string {
  return "55";
}

export function getStartingPosition(): string {
  return "12N";
}
export function getInstructions(): string {
  return "LMLMLMLMM";
}
