import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { Room, Star } from "@material-ui/icons";
import "./app.css";
//import LoginPage from './components/Login';
//import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

function App () {
    const currentUser = "Shaun";
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

                        <Room style={{ fontSize: viewport.zoom * 7, color: "slateblue" }} />
                    </Marker>
                    <Popup
                        latitude={-31.8935}
                        longitude={115.7549}
                        closeButton={true}
                        closeOnClick={false}
                        anchor="left">
                        <div className="card">
                            <label>Place</label>
                            <h4 className="place">Scarborough Beach</h4>
                            <label>Review</label>
                            <p>Love this view!</p>
                            <label>Rating</label>
                            <div className="stars">
                                <Star className="star" />
                                <Star className="star" />
                                <Star className="star" />
                                <Star className="star" />
                                <Star className="star" />
                            </div>
                            <label>Information</label>
                            <span className="username">Created by <b>Shaun</b></span>
                            <span className="date">1 hour ago</span>
                        </div>
                    </Popup>
                    )
                    {currentUser ? (<button className="button logout">Log out</button>
                    ) : (
                <div className="buttons">
                    <button className="button login">Login</button>
                    <button className="button Register">Register</button>
                </div>
                    )}
                </ReactMapGL>
            </div>
    );
}



export default App;