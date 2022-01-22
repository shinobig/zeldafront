import React from "react";
import {useAppDispatch} from '../../../app/hooks';
import {setCellData} from '../InnerMapComponent/gridSliceActions'
import {IMAGE_MANAGER} from "../../../images/ImagesManager";

export interface CellProps {
  _id: string
  title: string
  value: string,
  coordinates: string,
  index?: number
  cellId?: string
}

const GridCellComponent: React.FC<CellProps> = ({_id, value, title, coordinates}) => {

  const dispatch = useAppDispatch();

  const selectThisCell = () => {


    dispatch(setCellData(coordinates))
  }

  const image = IMAGE_MANAGER[value];
  return (
    <div
      style={{backgroundColor: value ? value : ''}}
      className='single-cell'
      onClick={selectThisCell}
    >
      <img src={image}/>
    </div>
  );
};

export default GridCellComponent;
