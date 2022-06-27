import { ITag } from 'models';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: ITag = {
    id: 0,
    title: '',
    color: '',
};

export const selectedTagSlice = createSlice({
    name: 'selectedTag',
    initialState,
    reducers: {
        changeSelectedTag: (state, action: PayloadAction<ITag>) => {
            return { ...action.payload };
        },
        removeSelectedTag: () => {
            return { ...initialState };
        },
    },
});

export const selectedTagReducer = selectedTagSlice.reducer;
export const selectedTagActions = selectedTagSlice.actions;
