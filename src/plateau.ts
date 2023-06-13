export function setGridSize(size: string): object {
  type grid = { x: number; y: number };

  let x = parseInt(size.charAt(0));
  let y = parseInt(size.charAt(1));
  let grid = { x, y };

  console.log("x:", x);
  console.log("y:", y);
  console.log(grid);

  return grid;
}
