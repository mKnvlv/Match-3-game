import { createSlice } from '@reduxjs/toolkit';
import { createGrid } from '../../utils/createGrid';
import { Cell } from '../types/Cell';

const initialState: Cell[][] = createGrid(8);

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {},
});
