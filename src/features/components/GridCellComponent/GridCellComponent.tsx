import React from "react";
import {useAppDispatch} from '../../../app/hooks';
import {setCellData} from '../InnerMapComponent/gridSliceActions'
import {IMAGE_MANAGER} from "../../../images/ImagesManager";

export interface CellProps {
  id: string
  title: string
  value: string,
  coordinates: string
}

const GridCellComponent: React.FC<CellProps> = ({id, value, title, coordinates}) => {

  const dispatch = useAppDispatch();

  const selectThisCell = () => {

    console.log(title)

    dispatch(setCellData(coordinates))
  }

  const image = IMAGE_MANAGER[value];
  return (
    <div
      style={{backgroundColor: value ? value : ''}}
      className='single-cell'
      onClick={selectThisCell}
    >
      <img style={{width: '100%'}} src={image}/>
    </div>
  );
};

export default GridCellComponent;
