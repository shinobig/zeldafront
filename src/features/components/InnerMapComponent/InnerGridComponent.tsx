import GridCellComponent from "../GridCellComponent/GridCellComponent";
import {useAppSelector as useSelector} from '../../../app/hooks';
import {rowBulder, mapBuilder} from './InnerGridComponentUtils';
import {RootState} from "../../../app/store";
import {useState} from "react";

const InnerGridComponent = () => {

    const {rows, columns, cellData} = useSelector((state: RootState) => state.grid)

    return (
        <div>
            {
                mapBuilder(rows, columns, cellData).map((row,index) =>
                    <div key={`${index}-inner-grid`} className='inner-grid'>
                        {
                            row.map(cell =>
                                <GridCellComponent
                                    id={cell.id}
                                    title={cell.title}
                                    value={cell.value}
                                    key={`${cell.title}-grid-cell-cs`}
                                />
                            )
                        }
                    </div>
                )
            }
            <button onClick={() => console.log(cellData)}>Cell data</button>
        </div>
    );
};

export default InnerGridComponent;
