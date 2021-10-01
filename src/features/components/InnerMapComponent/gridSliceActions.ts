import {gridSlice , SetMultipleCellDataInterface} from "./gridSlice";
import {Dispatch} from "@reduxjs/toolkit";

export const setCellData = (selectedCellId: string) => {

    return async (dispatch: Dispatch) => {
        dispatch(gridSlice.actions.setMultipleCellData(selectedCellId))
    }
}
