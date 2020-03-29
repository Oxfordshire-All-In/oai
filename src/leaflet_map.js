import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import data from './community_orgs'
import L from 'leaflet'

// https://stackoverflow.com/questions/44154939/load-local-images-in-react-js
export const pointerIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + '/icons8-street-view-48.png',
  iconRetinaUrl: process.env.PUBLIC_URL + '/icons8-street-view-48.png',
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 35],
  // shadowSize: [68, 95],
  // shadowAnchor: [20, 92],
})

class Map extends React.Component {

  render() {

    const oxford_center = [51.7535, -1.2716]

    return (
      <LeafletMap
        center={oxford_center}
        zoom={10}
        maxZoom={16}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >

        {/* <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        /> */}

        <TileLayer
          url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWlrZXdhbG1zbGV5IiwiYSI6ImNrOGRhNmFtYTB1NDgzaGx2emcyOGFmdmwifQ.0pmT0dDyyqU4oXgMdpbcLg'
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          maxZoom={18}
          id='mapbox/streets-v11'
          tileSize={512}
          zoomOffset={-1}
          accessToken='pk.eyJ1IjoibWlrZXdhbG1zbGV5IiwiYSI6ImNrOGRhNmFtYTB1NDgzaGx2emcyOGFmdmwifQ.0pmT0dDyyqU4oXgMdpbcLg'
        />

      <ul>
        {data.map((org) => {
          return <Marker
           position={[org.Latitude, org.Longitude]}
           icon={pointerIcon}
           >
          <Popup>
            {org['Name of your group/organisation/service']}
            <br></br>
            <a href={org['Link for your website or Facebook page (if applicable)']}>Website</a>
          </Popup>
        </Marker>
        })}
      </ul>

      <a target="_blank" href="https://icons8.com/icons/set/street-view">Street View icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>


      </LeafletMap>
    );
  }
}

export default Map