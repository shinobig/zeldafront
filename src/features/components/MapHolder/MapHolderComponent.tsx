import InnerGridComponent from "../InnerMapComponent/InnerGridComponent";
import {fetchMap} from "../InnerMapComponent/gridSlice";
import {useAppDispatch} from "../../../app/hooks";

const MapHolderComponent = () => {
    const dispatch = useAppDispatch()
    dispatch(fetchMap('61e742e8a45105d52c9ae137'))
    console.log('hola')

    return (
        <div style={{overflow: 'scroll', height: '100vh'}}>
            <InnerGridComponent/>
        </div>
    )

}

export default MapHolderComponent
