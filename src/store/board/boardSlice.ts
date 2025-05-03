import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createGrid } from '../../utils/createGrid';
import { Cell } from '../../features/types/Cell';

const initialState: { grid: Cell[][] } = { grid: createGrid(8) };
interface SwipeAction extends PayloadAction {}

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {
    swipeDown: (state, payload: PayloadAction) => {
      return { ...state };
    },
    swipeUp: (state, payload: PayloadAction) => {
      return { ...state };
    },
    swipeLeft: (state, action: PayloadAction<{ rowIndex: number; cellIndex: number }>) => {
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
    swipeRight: (state, action: PayloadAction<{ rowIndex: number; cellIndex: number }>) => {
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
