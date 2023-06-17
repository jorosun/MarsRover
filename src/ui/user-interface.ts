import { clear, print, askQuestion } from "./console";

export function welcomeToMarsRover(): void {
  clear(false);
  print("----------------------------");
  print("| Welcome to the Mars Rover|");
  print("----------------------------");
}

export function endMarsRover(): void {
  print("***************************************");
  print("You failed to input the correct data to the Mars Rover😭");
  askQuestion("Press ENTER to restart! ", welcomeToMarsRover);
}

export function getGridSize(size: string): string | undefined {
  if (size && size.length > 0) {
    return size;
  }
}

export function getStartingPosition(start: string): string | undefined {
  if (start && start.length > 0) {
    return start;
  }
}
export function getInstructions(instruct: string): string | undefined {
  if (instruct && instruct.length > 0) {
    return instruct;
  }
}
