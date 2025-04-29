import { createSlice } from '@reduxjs/toolkit';
import { createBoard } from '../../utils/createBoard';
import { Cell } from '../types/Cell';

const initialState: Cell[][] = createBoard(8);

export const boardSlice = createSlice({
  name: 'board',
  initialState: initialState,
  reducers: {},
});
