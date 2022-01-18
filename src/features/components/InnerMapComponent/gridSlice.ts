import {createAsyncThunk, createSlice, PayloadAction, current} from '@reduxjs/toolkit';
import {CellProps} from '../GridCellComponent/GridCellComponent'
import {ShapeHolderProps} from '../ShapeHolder/ShapeHolder';
import {getAdjacentCells} from './InnerGridComponentUtils'


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

const initialState: GridState = {
    columns: 10,
    rows: 10,
    cellData: [],
    shape: {
        id: '',
        rows: 0,
        columns: 0,
        shape_cells: []
    }
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        setMultipleCellData: (state, action: PayloadAction<string>) => {
            const allCells = [...state.cellData]
            const clickedCellId: string = action.payload;
            let cellsToChange = getAdjacentCells(clickedCellId, current(state.cellData), current(state.shape));
            console.log('cells to change', cellsToChange)
            allCells.forEach((cell: CellProps) => {
                cellsToChange.forEach(singleCellToChange => {
                    if (cell && singleCellToChange?.id === cell?.id) {
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
