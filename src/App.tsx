import React from 'react';
import './App.scss';
import MapHolderComponent from "./features/components/MapHolder/MapHolderComponent";
import MenuHolder from "./features/components/Menu/MenuHolder";

function App() {
  return (
    <div className="App container-fluid" >
        <div className='row'>
            <div className='col-md-4'>
                <MenuHolder />
            </div>
            <div className='col-md-8'>
       <MapHolderComponent />

            </div>

        </div>
    </div>
  );
}

export default App;
