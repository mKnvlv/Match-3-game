import { FC } from 'react';
import { Board } from '../Board/Board';
import './game-container.scss';

export const GameContainer: FC = () => {
  return (
    <main className="game-container">
      <Board />
    </main>
  );
};
