import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './board.scss';
import { CellComponent } from '../Cell/Cell';
import { Cell } from '../../features/types/Cell';
import { useEffect, useState } from 'react';

export const Board = () => {
  const board = useSelector((state: RootState) => state.board);
  const [activeCell, setActiveCell] = useState<Cell | null>(null);

  useEffect(() => {
    setActiveCell(board[0][0]);
  }, []);

  useEffect(() => {
    console.log(activeCell);
  });

  return (
    <section className="board">
      {board.map((row) =>
        row.map((cell) => (
          <CellComponent
            key={cell.x + cell.y}
            cell={cell}
            isActive={cell.x === activeCell?.x && cell.y === activeCell.y}
          />
        )),
      )}
    </section>
  );
};
