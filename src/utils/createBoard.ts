import { Cell } from '../features/types/Cell';
import { Color } from '../features/types/Color';

export function createBoard(n: number): Cell[][] {
  let board: Cell[][] = [];

  for (let i = 0; i < n; i++) {
    const row: Cell[] = Array(n)
      .fill('')
      .map((item, index) => {
        const color: Color[] = ['blue', 'green', 'red', 'violet'];
        const randomNumber = Math.floor(Math.random() * 4);
        return {
          color: color[randomNumber],
          x: index + 1,
          y: i + 1,
        };
      });
    board.push(row);
  }
  return board;
}
