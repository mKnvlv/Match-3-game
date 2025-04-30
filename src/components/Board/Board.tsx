import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CellComponent } from '../Cell/Cell';
import { Cell } from '../../features/types/Cell';
import { FC, useEffect, useState } from 'react';
import './board.scss';
import { Position } from '../../features/types/Position';

interface BoardProps {
  position: Position;
}

export const Board: FC<BoardProps> = ({ position }) => {
  const board = useSelector((state: RootState) => state.board);

  useEffect(() => {});

  return (
    <section className="board">
      {board.map((row) =>
        row.map((cell) => (
          <CellComponent
            key={cell.x + cell.y}
            cell={cell}
            isActive={cell.x === position?.x && cell.y === position.y}
            isSelected={cell.x === position?.x && cell.y === position.y && position.selected}
          />
        )),
      )}
    </section>
  );
};
