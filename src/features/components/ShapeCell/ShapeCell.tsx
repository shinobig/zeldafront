import React from "react";
import {CellProps} from '../GridCellComponent/GridCellComponent'


const ShapeCell: React.FC<CellProps> = ({id, title, value}) => {

    return (
        <div
            className='single-cell-shape'
            style={{backgroundColor: value ? value : ''}}
        >
            shapec
        </div>
    );
};

export default ShapeCell;
