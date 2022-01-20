import {createAsyncThunk, createSlice, PayloadAction, current, Dispatch} from '@reduxjs/toolkit';
import {CellProps} from '../GridCellComponent/GridCellComponent'
import {ShapeHolderProps} from '../ShapeHolder/ShapeHolder';
import {getAdjacentCells} from './InnerGridComponentUtils'
import axios from "../../utils/axios/axiosInstance";


export interface GridState {
  columns: number,
  rows: number,
  cellsData: CellProps[],
  shape?: any | ShapeHolderProps
}

export interface SetMultipleCellDataInterface {
  cellsToChange: CellProps[],
}

export interface SetShapeHolderDataInterface {
  shape: ShapeHolderProps
}

const initialState: GridState = {
  columns: 0,
  rows: 0,
  cellsData: [],
  shape: {
    _id: '',
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
      const allCells = [...state.cellsData]
      const clickedCellId: string = action.payload;
      debugger
      let cellsToChange = getAdjacentCells(clickedCellId, current(state.cellsData), current(state.shape));
      console.log('cells to change', cellsToChange)
      allCells.forEach((cell: CellProps) => {
        cellsToChange.forEach(singleCellToChange => {
          if (cell && singleCellToChange?.id === cell?.id) {
            cell.value = singleCellToChange.value;
          }
        })
      })

      state.cellsData = allCells;
    },

    setMapData: (state, action: PayloadAction<GridState>) => {

      const {columns, rows, cellsData} = action.payload;

      state.rows = rows;
      state.columns = columns;
      state.cellsData = cellsData

    },
    setShapeData: (state, action: PayloadAction<SetShapeHolderDataInterface>) => {

      state.shape = action.payload.shape;
    }
  }
})

export const {setMultipleCellData, setShapeData, setMapData} = gridSlice.actions;

export function fetchMap(id: string) {


  return async (dispatch: Dispatch) => {
    try {
      await axios.get('/maps')
        .then(response => {
          dispatch(setMapData(response.data))
        })

    } catch (e) {
      console.error(e)
    }
  }

}

export default gridSlice.reducer
