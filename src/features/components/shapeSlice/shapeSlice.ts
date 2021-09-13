import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CellProps} from '../GridCellComponent/GridCellComponent'
import {ShapeHolderProps} from '../ShapeHolder/ShapeHolder';
import {SetMultipleCellDataInterface} from "../InnerMapComponent/gridSlice";

export interface ShapeInitialState {
    allShapes: ShapeHolderProps[]
}

export const shapesTests = [
    {
        id: 't1',
        rows: 1,
        columns: 1,
        image: ['red']
    }, {
        id: 't2',
        rows: 2,
        columns: 2,
        image: ['blue', 'blue', 'blue', 'blue']
    }, {
        id: 't3',
        rows: 3,
        columns: 3,
        image: ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green']
    },
]

const initialState = {
    allShapes: shapesTests
}

export const shapeSlice = createSlice({
    name: 'shape',
    initialState,
    reducers: {}
})

export default shapeSlice.reducer

