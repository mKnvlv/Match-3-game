import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CellComponent } from '../Cell/Cell';
import { FC, useEffect } from 'react';
import { Position } from '../../features/types/Position';
import './board.scss';

interface BoardProps {
  position: Position;
}

export const Board: FC<BoardProps> = ({ position }) => {
  const board = useSelector((state: RootState) => state.board);

  useEffect(() => {});

  return (
    <section className="board">
      {board.grid.map((row) =>
        row.map((cell) => {
          return (
            <CellComponent
              key={cell.x + cell.y}
              cell={cell}
              isActive={cell.x === position?.x && cell.y === position.y}
              isSelected={cell.x === position?.x && cell.y === position.y && position.selected}
            />
          );
        }),
      )}
    </section>
  );
};
