import React from 'react';
import ShapeCell from "../ShapeCell/ShapeCell";
import {shapeBuilder} from './shapeHolderUtils'
import {useAppDispatch} from "../../../app/hooks";
import {setShapeData} from '../InnerMapComponent/gridSlice';
import {CellProps} from '../GridCellComponent/GridCellComponent'

export interface ShapeHolderProps {
    id: string
    rows: number
    columns: number
    shape_cells: CellProps[]
}


const ShapeHolder: React.FC<ShapeHolderProps> = ({id, rows, columns, shape_cells}) => {

    const dispatch = useAppDispatch();

    const assignShapeData = () => {
        dispatch(setShapeData({shape: {id: id, rows: rows, columns: columns, shape_cells: shape_cells}}))
    }

    return (
        <div>
            {
                shapeBuilder(rows, columns, shape_cells).map((shapeRow, index) =>
                    <div
                        key={`${index}-shape-row`}
                        className='inner-grid'
                        onClick={assignShapeData}
                    >
                        {
                            shapeRow.map(cell =>
                                <ShapeCell
                                    value={cell.value}
                                    id={cell.id}
                                    key={`${cell.id}-shape-cell`}
                                    title={cell.title}
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
