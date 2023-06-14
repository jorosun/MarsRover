export interface POSITION {
  x: number;
  y: number;
  direction: string;
}
export interface GRID {
  x: number;
  y: number;
}

export function setGridSize(size: string): GRID {
  let x = parseInt(size.charAt(0));
  let y = parseInt(size.charAt(1));
  let currentGrid: GRID = { x, y };

  return currentGrid;
}

export function createPosition(pos: string): POSITION {
  let x = parseInt(pos.charAt(0));
  let y = parseInt(pos.charAt(1));
  let direction = pos.charAt(2);
  let currentPosition: POSITION = { x, y, direction };
  return currentPosition;
}
