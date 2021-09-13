import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CellProps} from '../GridCellComponent/GridCellComponent'
import {ShapeHolderProps} from '../ShapeHolder/ShapeHolder';
import {getAdjacentCells} from './InnerGridComponentUtils'

const testCellData = (): CellProps[] => {
    let cellData: CellProps[] = [];

    // x - y
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            cellData.push({
                id: `${x}-${y}`,
                value: ''
            })
        }
    }
    return cellData;
}


export interface GridState {
    columns: number,
    rows: number,
    cellData: CellProps[],
    shape: any | ShapeHolderProps
}

export interface SetMultipleCellDataInterface {
    cellsToChange: CellProps[],
}

export interface SetShapeHolderDataInterface {
    shape: ShapeHolderProps
}

const initialState = {
    columns: 10,
    rows: 10,
    cellData: testCellData(),
    shape: {
        id: '',
        rows: 0,
        columns: 0,
        image: ['']
    }
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        setMultipleCellData: (state, action: PayloadAction<string>) => {
            const allCells = [...state.cellData]
            const clickedCellId : string  = action.payload;

            let cellsToChange = getAdjacentCells(clickedCellId, state.cellData, state.shape);


            allCells.forEach(cell => {
                cellsToChange.forEach(singleCellToChange => {
                    if (singleCellToChange.id === cell.id) {
                        cell.value = singleCellToChange.value;
                    }
                })
            })
            state.cellData = allCells;
        },
        setShapeData: (state, action: PayloadAction<SetShapeHolderDataInterface>) => {
            state.shape = action.payload.shape;
        }
    }
})

export const {setMultipleCellData, setShapeData} = gridSlice.actions

export default gridSlice.reducer
