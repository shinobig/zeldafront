import React from "react";
import {useAppDispatch} from '../../../app/hooks';
import {setCellData} from '../InnerMapComponent/gridSliceActions'
import {IMAGE_MANAGER} from "../../../images/ImagesManager";

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

    const image = IMAGE_MANAGER[value];
    return (
        <div
            style={{backgroundColor: value ? value : ''}}
            className='single-cell'
            onClick={selectThisCell}
        >
            <img style={{width: '100%'}} src={image} />
        </div>
    );
};

export default GridCellComponent;
