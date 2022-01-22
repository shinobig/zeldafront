import React from 'react';
import {useAppSelector} from "../../../../app/hooks";
import axios from "../../../utils/axios/axiosInstance";

const MenuButtons = () => {

  const {cellsData, mapId, rows, columns} = useAppSelector(state => state.grid)

  const saveMap = () => {
    const coordinatesAndId = cellsData.map(cell => ({coordinates: cell.coordinates, cellId: cell._id}))

    const body = {
      rows,
      columns,
      cellsData: coordinatesAndId,
    }

    axios.patch(`maps/${mapId}`, body)
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.error(e)
      })

  }

  return (
    <div>
      <button onClick={saveMap}>Save map</button>
    </div>
  );
};

export default MenuButtons;
