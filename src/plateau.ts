import { Grid, Position } from "./types";
// export interface POSITION {
//   x: number;
//   y: number;
//   direction: string;
// }
// export interface GRID {
//   x: number;
//   y: number;
// }

export function setGridSize(size: string): Grid {
  let x = parseInt(size.charAt(0));
  let y = parseInt(size.charAt(1));
  let currentGrid: Grid = { x, y };

  return currentGrid;
}

export function createPosition(pos: string): Position {
  let x = parseInt(pos.charAt(0));
  let y = parseInt(pos.charAt(1));
  let direction = pos.charAt(2);
  let currentPosition: Position = { x, y, direction };
  return currentPosition;
}
