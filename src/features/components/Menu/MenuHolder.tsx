import React from 'react';
import ShapeHolder from "../ShapeHolder/ShapeHolder";
import {useAppSelector} from "../../../app/hooks";

const MenuHolder = () => {

    const {allShapes} = useAppSelector(state => state.shapes)
    const {shape} = useAppSelector(state => state.grid)

    return (
        <div className='row'>
            {
                allShapes && allShapes.map(shape =>
                    <div className='col-md-6'>
                        <ShapeHolder
                            id={shape.id}
                            rows={shape.rows}
                            columns={shape.columns}
                            image={shape.image}
                        />
                    </div>
                )
            }
            <button onClick={() => console.log(shape)}>Shape</button>
        </div>
    );
};

export default MenuHolder;
