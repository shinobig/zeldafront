import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CellProps} from '../GridCellComponent/GridCellComponent'
import {ShapeHolderProps} from '../ShapeHolder/ShapeHolder';
import {SetMultipleCellDataInterface} from "../InnerMapComponent/gridSlice";
import axios from "../../utils/axios/axiosInstance";
import {Dispatch} from 'redux'

export interface ShapeInitialState {
    allShapes: ShapeHolderProps[]
}

const initialState: ShapeInitialState = {
    allShapes: []
}

export const shapeSlice = createSlice({
    name: 'shape',
    initialState,
    reducers: {
        setAllShapes(state, action) {
            state.allShapes = action.payload
        }
    }
})

export const {setAllShapes} = shapeSlice.actions

export default shapeSlice.reducer

export function getAllShapes() {
    return async (dispatch: Dispatch) => {
        try {
            await axios.get('shapes/all/?expand=shape_cells.cell')
                .then(response => {
                    dispatch(setAllShapes(response.data))

                })
        } catch (e) {
            console.error(e)
        }
    }
}

