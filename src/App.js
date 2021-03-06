import React from 'react';
import './App.css';
import SimpleExample from './leaflet_map'
import './leaflet.css'
import './map_embed.css'

function App() {

  return (
    <div className="App">
      
      <header className="App-header">
      
        <div style={{width:800}}>

          <h2> ArcGIS Embed Demo </h2>
          <div class="embed-container">
            <iframe
            width="800" height="640" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Front End Map MW" 
            src="https://www.arcgis.com/apps/Embed/index.html?webmap=c939500d9372422cb50cae76e1990de4&extent=-1.5681,51.4764,-0.8402,51.9435&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light">
            </iframe>
          </div>

          <h2> Leaflet/OSM Embed Demo </h2>
          <SimpleExample style={{width:"800", height:"640"}} ></SimpleExample>
          <br></br>
          <br></br>




{/* https://www.mapbox.com/pricing/ static tiles API free to 200k */}
        </div>


      </header>
    </div>
  );
}

export default App;
