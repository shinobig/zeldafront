import React, {useEffect} from 'react';
import ShapeHolder, {ShapeHolderProps} from "../ShapeHolder/ShapeHolder";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {getAllShapes} from "../shapeSlice/shapeSlice";

const MenuHolder = () => {
  const dispatch = useAppDispatch()
  const {allShapes}: { allShapes: ShapeHolderProps[] } = useAppSelector(state => state.shapes)
  const {shape} = useAppSelector(state => state.grid)

  useEffect(() => {
    dispatch(getAllShapes())
  }, [dispatch]);

  return (
    <div className='row'>
      {
        allShapes && allShapes.length > 0 && allShapes.map((shape, index) =>
          <div
            key={`${index}-shape`}
            className='col-md-6'>
            <ShapeHolder
              _id={shape._id}
              rows={shape.rows}
              columns={shape.columns}
              shapeCells={shape.shapeCells}
            />
          </div>
        )
      }
      <button onClick={() => console.log(shape)}>Shape</button>
    </div>
  );
};

export default MenuHolder;
