import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

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
        >
        <Marker latitude={-31.8935} longitude={115.7549} offsetLeft={-20} offsetTop={-10}>
        <div>You are here</div>
      </Marker>
      </ReactMapGL>
      </div>
    );
}

export default App;