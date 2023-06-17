export type POSITION = {
  x: number;
  y: number;
  direction: string;
};
export type GRID = {
  x: number;
  y: number;
};

export const VALID_ROTATIONS = ["L", "R"] as const;
export type Rotation = (typeof VALID_ROTATIONS)[number];

export const VALID_DIRECTIONS = ["N", "E", "S", "W"] as const;
export type Direction = (typeof VALID_DIRECTIONS)[number];
