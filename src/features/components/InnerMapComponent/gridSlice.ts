import {createAsyncThunk, createSlice, PayloadAction, current, Dispatch} from '@reduxjs/toolkit';
import {CellProps} from '../GridCellComponent/GridCellComponent'
import {ShapeHolderProps} from '../ShapeHolder/ShapeHolder';
import {getAdjacentCells} from './InnerGridComponentUtils'
import axios from "../../utils/axios/axiosInstance";

interface basicPayloadAndState {
  columns: number,
  rows: number,
  cellsData: CellProps[],
}

export interface GridState extends basicPayloadAndState {
  mapId: string,
  shape?: any | ShapeHolderProps
}

export interface mapPayload extends basicPayloadAndState {
  _id: string,
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
  mapId: '',
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
      let allCells = [...current(state.cellsData)]
      const clickedCellCoordinates: string = action.payload;
      let cellsToChange = getAdjacentCells(clickedCellCoordinates, current(state.cellsData), current(state.shape));
      cellsToChange.forEach(cell => {
        if ((cell.hasOwnProperty('index') && cell.index !== undefined)) {
          allCells[cell.index] = cell
        }
      })
      state.cellsData = allCells;
    },

    setMapData: (state, action: PayloadAction<mapPayload>) => {
      const {columns, rows, cellsData, _id} = action.payload;
      state.mapId = _id
      state.rows = rows;
      state.columns = columns;
      state.cellsData = cellsData
    },
    setShapeData: (state, action: PayloadAction<SetShapeHolderDataInterface>) => {
      state.shape = action.payload.shape;
    },
  }
})

export const {setMultipleCellData, setShapeData, setMapData} = gridSlice.actions;

export function fetchMap(id: string) {


  return async (dispatch: Dispatch) => {
    try {
      await axios.get('/maps/61ea3d640e8aa3d3de69cd6b')
        .then(response => {
          //debugger
          dispatch(setMapData(response.data))
        })

    } catch (e) {
      console.error(e)
    }
  }

}

export default gridSlice.reducer
