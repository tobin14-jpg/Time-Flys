import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room } from "@material-ui/icons";

function App () {
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: -32.6728,
        longitude: 118.7751,
        zoom: 6.1
    });
    return(
        <div className="App">
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/t-14/ckvou2e7l7ehu15qljqoqb3be"
        >
        <Marker latitude={-31.8935} longitude={115.7549} offsetLeft={-20} offsetTop={-10}>
       
       <Room style={{ fontSize:viewport.zoom * 7, color:"slateblue"}}/>
       </Marker>
       <Popup
          latitude={-31.8935}
          longitude={115.7549}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
          <div>You are here</div>
        </Popup>
      </ReactMapGL>
      </div>
    );
}



export default App;