import { createSlice } from "@reduxjs/toolkit";
import { calculateWinner } from "../../ultils";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard: (state, action) => {
      const board = state.board;
      const nextMove = action.payload;
      if (calculateWinner(board) || board[nextMove]) {
        return;
      }
      if (state.xIsNext) {
        board[nextMove] = "X";
      } else {
        board[nextMove] = "O";
      }
      state.board = board;
      state.xIsNext = !state.xIsNext;
    },
    reset: (state) => {
      state.board = initialState.board;
      state.xIsNext=true
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBoard, reset } = boardSlice.actions;

export default boardSlice.reducer;
