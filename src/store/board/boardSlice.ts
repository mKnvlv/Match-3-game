import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createGrid } from '../../utils/createGrid';
import { Cell } from '../../features/types/Cell';

const initialState: { grid: Cell[][] } = { grid: createGrid(8) };

type SwipeAction = PayloadAction<{
  rowIndex: number;
  cellIndex: number;
}>;

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {
    swipeDown: (state, action: SwipeAction) => {
      const { grid } = state;
      const { rowIndex, cellIndex } = action.payload;

      const isFirstRowInvalid = rowIndex < 0 || rowIndex >= grid.length - 1;
      const isCellInvalid = cellIndex < 0 || cellIndex >= grid[0].length;

      if (isFirstRowInvalid || isCellInvalid) {
        return state;
      }

      const updatedGrid = [...grid];
      const currentRow = [...updatedGrid[rowIndex]];
      const rowBelow = [...updatedGrid[rowIndex + 1]];

      const currentElement = currentRow[cellIndex];
      const elementBelow = rowBelow[cellIndex];

      if (!currentElement || !elementBelow) {
        return state;
      }

      currentRow[cellIndex] = { ...elementBelow, y: currentElement.y };
      rowBelow[cellIndex] = { ...currentElement, y: elementBelow.y };

      updatedGrid[rowIndex] = currentRow;
      updatedGrid[rowIndex + 1] = rowBelow;

      return { ...state, grid: updatedGrid };
    },
    swipeUp: (state, action: SwipeAction) => {
      const { grid } = state;
      const { rowIndex, cellIndex } = action.payload;

      const isLastRowInvalid = rowIndex <= 0 || rowIndex >= grid.length;
      const isCellInvalid = cellIndex < 0 || cellIndex >= grid[0].length;

      if (isLastRowInvalid || isCellInvalid) {
        return state;
      }

      const updatedGrid = [...grid];
      const currentRow = [...updatedGrid[rowIndex]];
      const rowAbove = [...updatedGrid[rowIndex - 1]];

      const currentElement = currentRow[cellIndex];
      const elementAbove = rowAbove[cellIndex];

      if (!currentElement || !elementAbove) {
        return state;
      }

      currentRow[cellIndex] = { ...elementAbove, y: currentElement.y };
      rowAbove[cellIndex] = { ...currentElement, y: elementAbove.y };

      updatedGrid[rowIndex] = currentRow;
      updatedGrid[rowIndex - 1] = rowAbove;

      return { ...state, grid: updatedGrid };
    },
    swipeLeft: (state, action: SwipeAction) => {
      const { rowIndex, cellIndex } = action.payload;

      if (cellIndex <= 0 || cellIndex >= state.grid[rowIndex].length) {
        return state;
      }

      const newGrid = state.grid.map((row, rowIdx) => {
        if (rowIdx !== rowIndex) return row;

        const newRow = [...row];
        // Меняем местами элементы
        [newRow[cellIndex], newRow[cellIndex - 1]] = [newRow[cellIndex - 1], newRow[cellIndex]];
        return newRow.map((cell, index) => ({ ...cell, x: index }));
      });

      return {
        ...state,
        grid: newGrid,
      };
    },
    swipeRight: (state, action: SwipeAction) => {
      const { rowIndex, cellIndex } = action.payload;

      if (cellIndex <= 0 || cellIndex >= state.grid[rowIndex].length) {
        return state;
      }
      const newGrid = state.grid.map((row, rowIdx) => {
        if (rowIdx !== rowIndex) return row;

        const newRow = [...row];
        // Меняем местами элементы
        [newRow[cellIndex + 1], newRow[cellIndex]] = [newRow[cellIndex], newRow[cellIndex + 1]];
        return newRow.map((cell, index) => ({ ...cell, x: index }));
      });

      return {
        ...state,
        grid: newGrid,
      };
    },
  },
});

export const { swipeDown, swipeUp, swipeRight, swipeLeft } = boardSlice.actions;
