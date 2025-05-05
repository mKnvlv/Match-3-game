import { Board } from '../Board/Board';
import { useState, FC } from 'react';
import './game-container.scss';
import { Position } from '../../features/types/Position';
import { useDispatch, useSelector } from 'react-redux';
import { swipeDown, swipeLeft, swipeRight, swipeUp } from '../../store/board/boardSlice';
import { RootState } from '../../store/store';

export const GameContainer: FC = () => {
  const dispatch = useDispatch();
  const board = useSelector((state: RootState) => state.board);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0, selected: false });
  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    let y = 0;
    let x = 0;

    switch (event.key) {
      case 'ArrowDown':
        if (position.selected) {
          dispatch(swipeDown({ rowIndex: position.y, cellIndex: position.x }));
          y = position.y === 7 ? 0 : position.y + 1;
          return setPosition({ ...position, y, selected: false });
        }
        y = position.y === 7 ? 0 : position.y + 1;
        return setPosition({ ...position, y });
      case 'ArrowUp':
        if (position.selected) {
          dispatch(swipeUp({ rowIndex: position.y, cellIndex: position.x }));
          y = position.y === 0 ? 7 : position.y - 1;
          return setPosition({ ...position, y, selected: false });
        }
        y = position.y === 0 ? 7 : position.y - 1;
        return setPosition({ ...position, y });
      case 'ArrowRight':
        if (position.selected) {
          dispatch(swipeRight({ rowIndex: position.y, cellIndex: position.x }));
          x = position.x === 7 ? 0 : position.x + 1;
          setPosition({ ...position, x, selected: false });
          return;
        }
        x = position.x === 7 ? 0 : position.x + 1;
        return setPosition({ ...position, x });
      case 'ArrowLeft':
        if (position.selected) {
          dispatch(swipeLeft({ rowIndex: position.y, cellIndex: position.x }));
          x = position.x === 0 ? 7 : position.x - 1;
          setPosition({ ...position, x, selected: false });
          return;
        }
        x = position.x === 0 ? 7 : position.x - 1;
        return setPosition({ ...position, x });
      case 'Enter':
        return setPosition({ ...position, selected: !position.selected });

      default:
        return;
    }
  };

  return (
    <main tabIndex={0} className="game-container" onKeyDown={(event) => onKeyDownHandler(event)}>
      <Board position={position} />
    </main>
  );
};
