import React from 'react';
import './App.css';
import './map_embed.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <div style={{width:800}}>
          <div class="embed-container">
            <iframe
            width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Front End Map MW" 
            src="https://www.arcgis.com/apps/Embed/index.html?webmap=c939500d9372422cb50cae76e1990de4&extent=-1.5681,51.4764,-0.8402,51.9435&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legend=true&disable_scroll=true&theme=light">
            </iframe>
          </div>
        </div>


      </header>
    </div>
  );
}

export default App;
