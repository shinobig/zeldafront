import React from "react";
import {useAppDispatch} from '../../../app/hooks';
import {setCellData} from '../InnerMapComponent/gridSliceActions'

export interface CellProps {
    id: string
    value?: string
}

const GridCellComponent: React.FC<CellProps> = ({id, value}) => {

    const dispatch = useAppDispatch();

    const selectThisCell = () => {
        dispatch(setCellData(id))
    }

    return (
        <div
            style={{backgroundColor: value ? value : ''}}
            className='single-cell'
            onClick={selectThisCell}
        >
            {id}
        </div>
    );
};

export default GridCellComponent;
