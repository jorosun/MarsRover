import { Position, Grid, Rotation } from "./types";

export function performInstructions(
  instructions: string,
  start: Position,
  grid: Grid
): Position {
  let position = start;
  for (let i = 0; i < instructions.length; i++) {
    switch (instructions.charAt(i)) {
      case "L": {
        position = rotateRover(position, "L");
        break;
      }
      case "R": {
        position = rotateRover(position, "R");
        break;
      }
      case "M": {
        position = moveRover(position, grid);
        break;
      }
    }
  }
  return position;
}

export function rotateRover(reference: Position, command: Rotation): Position {
  switch (command) {
    case "L": {
      switch (reference.direction) {
        case "N": {
          reference.direction = "W";
          break;
        }
        case "E": {
          reference.direction = "N";
          break;
        }
        case "S": {
          reference.direction = "E";
          break;
        }
        case "W": {
          reference.direction = "S";
          break;
        }
      }
      break;
    }
    case "R": {
      switch (reference.direction) {
        case "N": {
          reference.direction = "E";
          break;
        }
        case "E": {
          reference.direction = "S";
          break;
        }
        case "S": {
          reference.direction = "W";
          break;
        }
        case "W": {
          reference.direction = "N";
          break;
        }
      }
      break;
    }
  }
  return reference;
}

export function moveRover(reference: Position, gridSize: Grid): Position {
  let maximumX = gridSize.x;
  let maximumY = gridSize.y;

  switch (reference.direction) {
    case "N": {
      if (reference.y === maximumY) {
        break;
      }
      reference.y = reference.y + 1;
      break;
    }
    case "E": {
      if (reference.x === maximumX) {
        break;
      }
      reference.x = reference.x + 1;
      break;
    }
    case "S": {
      if (reference.y === 0) {
        break;
      }
      reference.y = reference.y - 1;
      break;
    }
    case "W": {
      if (reference.x === 0) {
        break;
      }
      reference.x = reference.x - 1;
      break;
    }
  }
  return reference;
}
