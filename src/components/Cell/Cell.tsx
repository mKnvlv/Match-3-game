import { FC, PropsWithChildren } from 'react';
import { Cell } from '../../features/types/Cell';
import './cell.scss';

interface CellProps extends PropsWithChildren {
  onClickFunction?: () => void;
  cell: Cell;
  isActive: boolean;
  isSelected: boolean;
}

export const CellComponent: FC<CellProps> = ({ onClickFunction, cell, isActive, isSelected }) => {
  let className = `cell gem-${cell.gem}`;
  if (isActive && !isSelected) className += ' active';
  if (isSelected) className += ' selected';

  return <div className={className} onClick={onClickFunction}></div>;
};
