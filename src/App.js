import React from "react";
import Board from "./Board";
import "./App.css";
import Particles from 'react-particles-js';



/** Simple app that just shows the LightsOut game. */

function App() {



  return (
    <div className="App">
            <Board nrows={5} ncols={5} chanceLightStartsOn={.5} />
            <Particles 
              params={{"particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
              }}} 
              style={{position: 'absolute' ,zIndex: '0', margin : 'auto', top : '0', left : '0', width: '100%', height: '100%'}}/>
                
    </div>
  );
}

export default App;
