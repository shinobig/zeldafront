import React from "react";
import {CellProps} from '../GridCellComponent/GridCellComponent'
import {IMAGE_MANAGER} from "../../../images/ImagesManager";


const ShapeCell: React.FC<CellProps> = ({_id, title, value, coordinates}) => {
    const image = IMAGE_MANAGER[value];
    return (
        <div
            className='single-cell-shape'
            style={{backgroundColor: value ? value : ''}}
        >
            <img src={image} alt={value}/>
        </div>
    );
};

export default ShapeCell;
