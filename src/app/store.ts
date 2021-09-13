import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import gridReducer from '../features/components/InnerMapComponent/gridSlice';
import shapeReducer from '../features/components/shapeSlice/shapeSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    grid: gridReducer,
    shapes: shapeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
