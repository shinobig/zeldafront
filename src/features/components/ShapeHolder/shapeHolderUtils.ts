import {CellProps} from "../GridCellComponent/GridCellComponent";

export const shapeBuilder = (rows: number, columns: number, shapeCells: CellProps[]) => {
  let allCells = [...shapeCells]

  let buildedRows = []

  while (allCells.length > 0) {
    let rSection = allCells.splice(0, columns);
    let fixedRSection = rSection.map((fixedCell: any) => ({
        value: fixedCell.value,
        _id: fixedCell.coordinates,
        key: `${fixedCell._id}-shape-cell`,
        title: fixedCell.title,
      coordinates: fixedCell.coordinates,
      })
    )

    buildedRows.push(fixedRSection)
  }

  return buildedRows
}
