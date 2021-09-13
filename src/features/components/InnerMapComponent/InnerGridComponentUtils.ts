import {CellProps} from "../GridCellComponent/GridCellComponent";
import {ShapeHolderProps} from "../ShapeHolder/ShapeHolder";

export const rowBulder = (rows: number): number[] => {

    let cellsInRow = [];

    for (let i = 0; i > rows; i++) {
        // Here we add the corresponding cells
        cellsInRow.push(i)
    }

    return cellsInRow

}

export const mapBuilder = (rows: number, columns: number, cellData: CellProps[]): Array<CellProps[]> => {

    let buildedGrid: Array<CellProps[]> = [];

    if (rows > 0 && columns > 0) {
        if (cellData.length > 0) {
            let newCellData = [...cellData];
            while (newCellData.length > 0) {
                let rowWithContent = newCellData.splice(0, columns);
                buildedGrid.push(rowWithContent)
            }
        } else {
            for (let r = 0; r < rows; r++) {
                let row = [];
                for (let c = 0; c < columns; c++) {
                    row.push({id: `${r}-${c}`})
                }
                buildedGrid.push(row)
            }
        }
    }

    return buildedGrid;
}

export const getAdjacentCells = (clickedId: string, cellData: CellProps[], selectedShape: ShapeHolderProps) => {

    if(selectedShape.columns > 0 && selectedShape.rows > 0){
        const [x, y] = clickedId.split('-');

        let cellsToChangeIds = [clickedId]

        for(let row = parseInt(x); row < selectedShape.rows + parseInt(x); row ++){
            for(let column = parseInt(y); column < selectedShape.columns + parseInt(y); column++){
                cellsToChangeIds.push(`${row}-${column}`)
            }
        }

        let cellsToChange = cellData.filter(cell => cellsToChangeIds.includes(cell.id));

        cellsToChange.forEach((cell, index) => {cell.value = selectedShape.image[index]})

        return cellsToChange
    }

    return []
}
