import {CellProps} from "../GridCellComponent/GridCellComponent";

export const shapeBuilder = (rows: number, columns: number, shapeCells: CellProps[]) => {
  let allCells = [...shapeCells]

  console.log('all cells', shapeCells)
  let buildedRows = []

  while (allCells.length > 0) {
    let rSection = allCells.splice(0, columns);
    let fixedRSection = rSection.map((fixedCell: any) => ({
        value: fixedCell.value,
        id: fixedCell.coordinates,
        key: `${fixedCell._id}-shape-cell`,
        title: fixedCell.title
      })
    )

    buildedRows.push(fixedRSection)
  }

  return buildedRows
}
