import React from "react";
import {useAppDispatch} from '../../../app/hooks';
import {setCellData} from '../InnerMapComponent/gridSliceActions'

export interface CellProps {
    id: string
    title: string
    value: string
}

const GridCellComponent: React.FC<CellProps> = ({id, value, title}) => {

    const dispatch = useAppDispatch();

    const selectThisCell = () => {
        dispatch(setCellData(title))
    }

    return (
        <div
            style={{backgroundColor: value ? value : ''}}
            className='single-cell'
            onClick={selectThisCell}
        >
            {title}
        </div>
    );
};

export default GridCellComponent;
