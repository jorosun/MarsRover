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
  if (command === "L") {
    switch (reference.direction) {
      case "N": {
        reference.direction = "W";
      }
      case "E": {
        reference.direction = "N";
      }
      case "S": {
        reference.direction = "E";
      }
      case "W": {
        reference.direction = "S";
      }
    }
  } else {
    switch (reference.direction) {
      case "N": {
        reference.direction = "E";
      }
      case "E": {
        reference.direction = "S";
      }
      case "S": {
        reference.direction = "W";
      }
      case "W": {
        reference.direction = "N";
      }
    }
  }
  return reference;
}

export function moveRover(reference: POSITION) {
  return reference;
}
