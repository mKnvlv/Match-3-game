import { Board } from '../Board/Board';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useState, FC, useRef } from 'react';
import './game-container.scss';
import { Position } from '../../features/types/Position';

export const GameContainer: FC = () => {
  const gameContainerRef = useRef<HTMLElement>(null);
  const board = useSelector((state: RootState) => state.board);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0, selected: false });

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    let y = 0;
    let x = 0;
    switch (event.key) {
      case 'ArrowDown':
        y = position.y === 7 ? 0 : position.y + 1;
        return setPosition({ ...position, y });
      case 'ArrowUp':
        y = position.y === 0 ? 7 : position.y - 1;
        return setPosition({ ...position, y });
      case 'ArrowRight':
        x = position.x === 7 ? 0 : position.x + 1;
        return setPosition({ ...position, x });
      case 'ArrowLeft':
        x = position.x === 0 ? 7 : position.x - 1;
        return setPosition({ ...position, x });
      case 'Enter':
        return setPosition({ ...position, selected: !position.selected });

      default:
        return;
    }
  };

  return (
    <main
      tabIndex={0}
      ref={gameContainerRef}
      className="game-container"
      onKeyDown={(event) => onKeyDownHandler(event)}
    >
      <Board position={position} />
    </main>
  );
};
