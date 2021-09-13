import {gridSlice , SetMultipleCellDataInterface} from "./gridSlice";

export const setCellData = (selectedCellId: string) => {

    return async (dispatch: any) => {
        dispatch(gridSlice.actions.setMultipleCellData(selectedCellId))
    }
}
