import React, { Component } from 'react';
import { useState } from "react";
import './cliquestyle.css';
import {Link} from 'react-router-dom';

import person from './person.png';

import Draggable from 'react-draggable';

import LineTo from 'react-lineto';
import Button from 'react-bootstrap/Button';
import * as linefn from './clique1lines.js';
import { Navbar, Nav, Container } from 'react-bootstrap';



class Cliques extends Component {
    state = { 
   
disparr:[],
numnodes:5,

line1:true,
node1x:0,
node1y:0,



     }


    
 trackPos=(data)=>{
this.setState({
    node1x:data.x,
    node1y:data.y
    
})

};




makeline2=()=>{




var num=this.state.numnodes;
const dispgraph=linefn.gengraph(num);

    
this.setState({
disparr:dispgraph
})



}


nodeclicked=(node_name)=>{


    var mynode=document.getElementsByClassName(node_name.mynode);
    var mycolor=mynode[0].style.backgroundImage;
    if(mycolor=="linear-gradient(blue, blue)")
     {mynode[0].style.backgroundImage=`url(${person})`;
     mynode[0].style.height="60px";
    }
     else
     {mynode[0].style.backgroundImage=`linear-gradient(blue, blue)`;
     mynode[0].style.height="59px";
    }


    //  mynode[0].style.backgroundImage=`url(${greenimg})`;

}





    render() { 
const dispgraph=this.state.disparr;
const numnodes=this.state.numnodes;
const nodepos=[];
for(var x=1;x<=numnodes;x++)
{
    nodepos.push(x);
}



        return (  <React.Fragment>


{/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
  </Navbar> */}


<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
    Find maximal clique
      <h1 className="navbar-brand" ><h1>Find maximal clique</h1> Find largest group of mutual friends </h1>
    </div>
    <button  className="btn btn-danger navbar-btn" onClick={()=>{this.setState({numnodes:this.state.numnodes+1})}}>Add nodes </button>
    <button  className="btn btn-danger navbar-btn" onClick={()=>{ this.state.numnodes>0 ?
    this.setState({numnodes:this.state.numnodes-1}):
    this.setState({numnodes:0})}}>Remove nodes </button>

    <button  className="btn btn-danger navbar-btn" onClick={this.makeline2}>Get Random Graph </button>
    <button  className="btn btn-danger navbar-btn" onClick={linefn.viewsoln}>Get Solution </button>
    <button  className="btn btn-danger navbar-btn" onClick={linefn.checksol}>Check Solution</button>



    <ul className="nav navbar">
    <li className="links"><Link to="/home" className="links">Home</Link></li>

    </ul>
   
    
  </div>
</nav>



{/* <Button variant="primary" onClick={()=>{this.setState({numnodes:this.state.numnodes+1})}}>Add nodes</Button >
<Button variant="primary" onClick={this.makeline2}>makeline</Button >
<Button variant="primary" onClick={linefn.viewsoln}>Get Solution</Button >
<Button variant="primary" onClick={linefn.checksol}>Check Solution</Button >
<Button variant="primary" onClick={()=>{
    this.state.numnodes>0 ?
    this.setState({numnodes:this.state.numnodes-1}):
    this.setState({numnodes:0})

}
    
    }>Remove nodes</Button > */}



{dispgraph.map((item, idx) => {

     
    const[n1,n2]= item;
    var st=`node${n1}`;
    var end=`node${n2}`;

    return(
        <LineTo from={st} to={end} key={idx.valueOf()} borderColor="black" borderWidth={2} />

    )

})}


{nodepos.map((item,index)=>{
var mynode=`node${item}`;
var xpos=50*(index+1);
var ypos=30*(index+1);
let xdpos=xpos.valueOf();
xdpos=Math.floor(Math.random() * (850 - 10) + 10);
let ydpos=ypos.valueOf();
ydpos=Math.floor(Math.random() * (90 - 50) + 50);



return(

    <React.Fragment>

        
        <Draggable  defaultPosition={{x: xdpos, y: ydpos}} key={index.valueOf()} onDrag={(e, data) => {this.trackPos(data)}} >
        <div className={mynode} onClick={()=>this.nodeclicked({mynode})}  style={{height:60 ,width:60, borderRadius:"50%",backgroundImage:`url(${person})`, margin:20,backgroundPosition: 'center',
  backgroundSize: 'cover',
  cursor:"pointer",
  backgroundRepeat: 'no-repeat' }} >
        </div>
        </Draggable>
    </React.Fragment>

)

})}



        </React.Fragment>);
    }
}
 
export default Cliques;