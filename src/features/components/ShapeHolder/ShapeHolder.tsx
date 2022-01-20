import React from 'react';
import ShapeCell from "../ShapeCell/ShapeCell";
import {shapeBuilder} from './shapeHolderUtils'
import {useAppDispatch} from "../../../app/hooks";
import {setShapeData} from '../InnerMapComponent/gridSlice';
import {CellProps} from '../GridCellComponent/GridCellComponent'

export interface ShapeHolderProps {
  _id: string
  rows: number
  columns: number
  shapeCells: CellProps[]
}


const ShapeHolder: React.FC<ShapeHolderProps> = ({_id, rows, columns, shapeCells}) => {

  const dispatch = useAppDispatch();

  const assignShapeData = () => {
    dispatch(setShapeData({shape: {_id: _id, rows: rows, columns: columns, shapeCells: shapeCells}}))
  }

  return (
    <div>
      {
        shapeBuilder(rows, columns, shapeCells).map((shapeRow, index) =>
          <div
            key={`${index}-shape-row`}
            className='inner-grid'
            onClick={assignShapeData}
          >
            {
              shapeRow.map(cell =>
                <ShapeCell
                  coordinates={cell.coordinates}
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
