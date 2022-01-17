import {CellProps} from "../GridCellComponent/GridCellComponent";

export const shapeBuilder = (rows: number, columns: number, shapeCells: CellProps[]) => {
// debugger
    let allCells = [...shapeCells]

    let buildedRows = []

    while (allCells.length > 0) {
        let rSection = allCells.splice(0, columns);
// debugger
        let fixedRSection = rSection.map((fixedCell: any) => ({
                value: fixedCell.value,
                id: fixedCell.coordinates,
                key: `${fixedCell.id}-shape-cell`,
                title: fixedCell.title
            })
        )

        buildedRows.push(fixedRSection)
    }

    return buildedRows


}
