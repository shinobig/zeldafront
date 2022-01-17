import InnerGridComponent from "../InnerMapComponent/InnerGridComponent";

const MapHolderComponent = () => {

    return (
        <div style={{overflow: 'scroll', height: '100vh'}}>
            <InnerGridComponent/>
        </div>
    )

}

export default MapHolderComponent
