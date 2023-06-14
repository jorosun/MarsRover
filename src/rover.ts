import { POSITION, GRID } from "./plateau";

export function performInstructions(
  instructions: string,
  start: POSITION,
  grid: GRID
): POSITION {
  let position = start;
  console.log("start position:", position);
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
    console.log("position:", position);
  }
  console.log("final position:", position);
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

export function moveRover(reference: POSITION, gridSize: GRID): POSITION {
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
