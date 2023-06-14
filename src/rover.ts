import { POSITION, GRID } from "./plateau";

export function performInstructions(
  instructions: string,
  start: POSITION,
  grid: GRID
): POSITION {
  let position = start;
  for (let i = 0; i < instructions.length; i++) {
    switch (instructions.charAt(i)) {
      case "L": {
        // rotate 90 degrees left
        position = rotateRover(position, "L");
      }
      case "R": {
        // rotate 90 degrees right
        position = rotateRover(position, "R");
      }
      case "M": {
        // move rover forward one grid point
        position = moveRover(position);
      }
    }
  }
  return position;
}

export function rotateRover(reference: POSITION, command: "L" | "R"): POSITION {
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
        case "W":{
            reference.direction = "S";
            break;
          }
      };
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

export function moveRover(reference: POSITION) {
  return reference;
}
