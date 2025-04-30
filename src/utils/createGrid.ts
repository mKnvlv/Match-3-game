import { Cell } from '../features/types/Cell';
import { Gem } from '../features/types/Gem';
import { Grid } from '../features/types/Grid';

export function createGrid(size: number = 8): Grid {
  const gems: Gem[] = ['red', 'green', 'blue', 'yellow', 'purple'];
  const grid: Grid = [];

  for (let y = 0; y < size; y++) {
    const row: Cell[] = [];
    for (let x = 0; x < size; x++) {
      // Фишка не должна совпадать с двумя предыдущими по горизонтали/вертикали
      let gem: Gem;
      do {
        gem = gems[Math.floor(Math.random() * gems.length)];
      } while (
        (x >= 2 && row[x - 1].gem === gem && row[x - 2].gem === gem) ||
        (y >= 2 && grid[y - 1][x].gem === gem && grid[y - 2][x].gem === gem)
      );

      row.push({ gem, x, y });
    }
    grid.push(row);
  }
  return grid;
}
