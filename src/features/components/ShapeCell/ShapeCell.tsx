import React from "react";
import {useAppDispatch} from '../../../app/hooks';
import {setCellData} from '../InnerMapComponent/gridSliceActions'


export interface ShapeCellProps {
    image? : string
}

const ShapeCell: React.FC<ShapeCellProps> = ({image}) => {

    return (
        <div
            className='single-cell-shape'
        style={{backgroundColor: image? image : ''}}
        >
           shapec
        </div>
    );
};

export default ShapeCell;
