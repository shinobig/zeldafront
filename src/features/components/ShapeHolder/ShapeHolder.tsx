import React from 'react';
import ShapeCell from "../ShapeCell/ShapeCell";
import {shapeBuilder} from './shapeHolderUtils'
import {useAppDispatch} from "../../../app/hooks";
import {setShapeData} from '../InnerMapComponent/gridSlice';

export interface ShapeHolderProps {
    id: string
    rows: number
    columns: number
    image: string[]
}


const ShapeHolder: React.FC<ShapeHolderProps> = ({id, rows, columns, image}) => {

    const dispatch = useAppDispatch();

    const assignShapeData = () => {
        dispatch(setShapeData({shape: {id: id, rows: rows, columns: columns, image: image}}))
    }

    return (
        <div>
            {
                shapeBuilder(rows, columns, image).map(shapeRow =>
                    <div
                        className='inner-grid'
                        onClick={assignShapeData}
                    >
                        {
                            shapeRow.map(cell =>
                                <ShapeCell
                                    image={cell}
                                />
                            )
                        }
                    </div>
                )
            }

        </div>
    );
};

export default ShapeHolder;
