export type Position = {
  x: number;
  y: number;
  direction: string;
};
export type Grid = {
  x: number;
  y: number;
};

export const VALID_ROTATIONS = ["L", "R"] as const;
export type Rotation = (typeof VALID_ROTATIONS)[number];

export const VALID_DIRECTIONS = ["N", "E", "S", "W"] as const;
export type Direction = (typeof VALID_DIRECTIONS)[number];

export type Rover = {
  name: string;
  positionArr: Position[];
};

export type MarsRover = {
  gridCoords: {
    x: number;
    y: number;
  };
  rovers: Rover[];
};
