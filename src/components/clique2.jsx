import React, { Component } from 'react';
import './maxclique2.css';
import './jsclique.js';
import person from './person2.png';
import * as callfn from './jsclique.js';
class Clique2 extends Component {
    state = {  }
    render() { 
        return (

<React.Fragment>



<div id="init">
    <label for="numnodes"><h2>Select number of people</h2></label>

    
        
            <select id="numnodes">
              <option value="4">4</option>
              <option value="5" selected="selected">5</option>
              <option value="6">6</option>
            </select>
        

    <button onClick={callfn.gennodes} style={{font:"25px"}}> Go!</button>
  
    <br></br>

    <h2><button onClick={callfn.gengraph} style={{font:"25px"}}>Generate random graph</button></h2>
</div>



                        <svg id="svg" xmlns="http://www.w3.org/2000/svg" >
                          <defs>
                            <pattern id="personimage" patternUnits="userSpaceOnUse" height="86" width="80">
                              <image x="0" y="15" height="80" width="80" href={person}></image>
                            </pattern>
                          </defs>


                            <circle onClick={() => callfn.trial1("circ1")} cx="600" cy="220" r="35" stroke="black" id="circ1" className="circle_nodes" stroke-width="3" fill="url(#personimage)" />
                              <circle onClick={() => callfn.trial1("circ2")} cx="200" cy="310" r="35" stroke="black" id="circ2" className="circle_nodes" stroke-width="3" fill="url(#personimage)" />
                              <circle onClick={() => callfn.trial1("circ3")} cx="200" cy="52" r="35" stroke="black" id="circ3" className="circle_nodes" stroke-width="3" fill="url(#personimage)" />
                              <circle onClick={() => callfn.trial1("circ4")} cx="600" cy="400" r="35" stroke="black" id="circ4" className="circle_nodes" stroke-width="3" fill="url(#personimage)" />
                              <circle onClick={() => callfn.trial1("circ5")} cx="435" cy="480" r="35" stroke="black" id="circ5" className="circle_nodes" stroke-width="3" fill="url(#personimage)" />
                              <circle onClick={() => callfn.trial1("circ6")} cx="434" cy="52" r="35" stroke="black" id="circ6" className="circle_nodes" stroke-width="3" fill="url(#personimage)" />

                              <ellipse onClick={callfn.viewsoln} className="boxes" id="solnbox" cx="1100" cy="100" rx="50" ry="30" style={{fill:"#C8AFEF",stroke:"purple"}} />
                              <text x="1100" y="100" className="boxes" text-anchor="middle" fill="black" font-size="20px" font-family="Arial" dy=".3em">Solution!</text>

                              <ellipse onClick={callfn.checksol} className="boxes"  id="checkbox" cx="1100" cy="300" rx="50" ry="30" style={{fill:"#C8AFEF",stroke:"purple"}} />
                              <text x="1100" y="300" className="boxes"  text-anchor="middle" fill="black" font-size="20px" font-family="Arial" dy=".3em">Check!</text>


                          <line className="line" id="line1"/>
                          <line className="line" id="line2"/>
                          <line className="line" id="line3"/>
                          <line className="line" id="line4"/>
                          <line className="line" id="line5"/>
                          <line className="line" id="line6"/>
                          <line className="line" id="line7"/>
                          <line className="line" id="line8"/>
                          <line className="line" id="line9"/>
                          <line className="line" id="line10"/>
                          <line className="line" id="line11"/>
                          <line className="line" id="line12"/>
                          <line className="line" id="line13"/>
                          <line className="line" id="line14"/>
                          <line className="line" id="line15"/>
                        </svg>

</React.Fragment>


          );
    }
}
 
export default Clique2;