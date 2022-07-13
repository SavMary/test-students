import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { Data, State } from '../react-app-env';
import { ActionType } from './types';

export const setData = createAction<Data[]>(ActionType.SET_DATA);
export const setTotalPage = createAction<number>(ActionType.SET_TOTAL_PAGE);
export const setCurrentPage = createAction<number>(ActionType.SET_CURRENT_PAGE);
export const setTotalSize = createAction<number>(ActionType.SET_TOTAL_SIZE);
export const setCurrentSize = createAction<number>(ActionType.SET_CURRENT_SIZE);

const initialState: State = {
    data: [],
    totalPage: 0,
    currentPage: 1,
    totalSize: 0,
    currentSize: 5,
  };

const reducer = createReducer(initialState, (builder) => {
    builder.addCase(setData, (state, action) => {
        state.data = action.payload;
    });
    builder.addCase(setTotalPage, (state, action) => {
        state.totalPage = action.payload;
    });
    builder.addCase(setCurrentPage, (state, action) => {
        state.currentPage = action.payload;
    });
    builder.addCase(setTotalSize, (state, action) => {
        state.totalSize = action.payload;
    });
    builder.addCase(setCurrentSize, (state, action) => {
        state.currentSize = action.payload;
    });
});

export const store = configureStore({
    reducer,
});
