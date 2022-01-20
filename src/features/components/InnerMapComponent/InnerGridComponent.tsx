import GridCellComponent from "../GridCellComponent/GridCellComponent";
import {useAppSelector as useSelector} from '../../../app/hooks';
import {rowBulder, mapBuilder} from './InnerGridComponentUtils';
import {RootState} from "../../../app/store";
import {useState} from "react";
import {log} from "util";

const InnerGridComponent = () => {

  const {rows, columns, cellsData} = useSelector((state: RootState) => state.grid)

  return (
    <div>
      {
        mapBuilder(rows, columns, cellsData).map((row, index) =>
          <div key={`${index}-inner-grid`} className='inner-grid'>
            {
              row.map(cell => {

                  return <GridCellComponent
                    id={cell.id}
                    title={cell.title}
                    value={cell.value}
                    key={`${cell.title}-grid-cell-cs`}
                    coordinates={cell.coordinates}
                  />
                }
              )
            }
          </div>
        )
      }
      <button onClick={() => console.log(cellsData)}>Cell data</button>
    </div>
  );
};

export default InnerGridComponent;
