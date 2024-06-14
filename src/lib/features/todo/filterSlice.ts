import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { VisibilityFilters } from '../../types';


const initialState = {
    selectedFilter: VisibilityFilters.SHOW_ALL
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilter(state, action: PayloadAction<VisibilityFilters>) {
            state.selectedFilter = action.payload
        },
    },
})

export const { updateFilter } = filterSlice.actions
export default filterSlice.reducer