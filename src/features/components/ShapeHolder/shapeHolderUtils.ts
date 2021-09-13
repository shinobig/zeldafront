export const shapeBuilder = (rows: number, columns: number, image: string[]) =>{

    let newImage = [...image]

        let buildedRows = []

        while (newImage.length > 0){
            let rSection = newImage.splice(0, columns);
            buildedRows.push(rSection)
        }

        return buildedRows


}
