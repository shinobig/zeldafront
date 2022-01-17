import {CellProps} from "../GridCellComponent/GridCellComponent";

export const shapeBuilder = (rows: number, columns: number, shapeCells: CellProps[]) => {

    let allCells = [...shapeCells]

    let buildedRows = []

    while (allCells.length > 0) {
        let rSection = allCells.splice(0, columns);

        let fixedRSection = rSection.map((fixedCell: any) => ({
                value: fixedCell.cell.value,
                id: fixedCell.cell_position,
                key: `${fixedCell.id}-shape-cell`,
                title: fixedCell.cell_position
            })
        )

        buildedRows.push(fixedRSection)
    }

    return buildedRows


}
