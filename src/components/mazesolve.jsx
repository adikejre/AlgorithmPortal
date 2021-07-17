import React, { Component } from 'react';
import './mazestyle.css'
import Button from 'react-bootstrap/Button';
import * as pathans from '../mazealgos/mazeans';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'; 
import {Link} from 'react-router-dom';

class Mazesolver extends Component {
    state = {  
        colnum:25,
        src:0,
        dst:0,
        blocks:[],
        speedOfAnim:10,
        Wwidth: window.innerWidth, 
    Wheight: window.innerHeight
    }



    componentDidMount(){
        this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
    
    updateWindowDimensions=() =>{
        this.setState({ Wwidth: window.innerWidth, Wheight: window.innerHeight });
      }


genmaze=()=>{
const cells=document.getElementsByClassName("cell");
// console.log(cells[0].style.backgroundColor);

const n=this.state.colnum**2;
let blockcells=[];


for(var i=0;i<n;i++)
{
    cells[i].style.backgroundColor="white";
    var prob=Math.random() * (100 - 1) + 1;
    if(prob<20)
    {
        cells[i].style.backgroundColor="black";
        blockcells.push(i);
    }
}
this.setState({
    blocks:blockcells
})

for(var i=0;i<n;i++)
{
    if(cells[i].style.backgroundColor=="white")
    {
        cells[i].style.backgroundColor="red";
        // cells[i].innerText="S";
        this.setState({
            src:i
        })
        break;
    }

    
}
for(var i=n-1;i>=0;i--)
{
    if(cells[i].style.backgroundColor=="white")
    {
        cells[i].style.backgroundColor="Green";
        this.setState({
            dst:i
        })
        // cells[i].innerText="E";
        break;
    }

}


}

mazeanimate=()=>{
    const speedanim=this.state.speedOfAnim;
    const start=this.state.src;
    const end=this.state.dst;
    const cols=this.state.colnum;
    const obstruct=this.state.blocks;
    const animate=pathans.bfspath(start,end,cols,obstruct);
    //console.log(animate);
    const alen=animate.length;
const cells=document.getElementsByClassName("cell");
let ccolor=true;
let reslen=0;
for(let g=0;g<alen;g++)
{
    if(animate[g].length==3){
        reslen++;
    }
}
let greencolor=0;
let gc2=greencolor+100;


    for(let i=0;i<alen;i++)
    {
        if(animate[i].length==1)
        {
            
             const[node]=animate[i];
            setTimeout(()=>{
             cells[node].style.backgroundColor="orange";

            },i*speedanim);
        
        

        }
        else if(animate[i].length==2)
        {
            if(ccolor)
            {
                const[node,node2]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="yellow";

            },i*speedanim);
            ccolor=false;
        }
            else{
                const[node,node2]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="white";

            },i*speedanim);
            ccolor=true;

            }

        }
    //   else if(animate[i].length==3)
    //     {
    //         const[node,node2]=animate[i];
    //         setTimeout(()=>{
    //             cells[node].style.backgroundColor="white";

    //         },i*speedanim);

    //     }
        else{
            const[node,node2]=animate[i];

                setTimeout(()=>{
                    cells[node].style.backgroundColor=`rgb(${greencolor},${gc2},0)`;
                    if(reslen>120)
                    {
                    greencolor+=1;
                    gc2+=1;
                    }
                    else{
                    greencolor+=120/reslen;
                    gc2+=120/reslen;
                    }
                },i*speedanim);
            
        }

    }
}


dfsmazeanimate=()=>{
    const speedanim=this.state.speedOfAnim;
    const start=this.state.src;
    const end=this.state.dst;
    const cols=this.state.colnum;
    const obstruct=this.state.blocks;
    const animate=pathans.dfspath(start,end,cols,obstruct);
 //   console.log(animate);
    const alen=animate.length;
const cells=document.getElementsByClassName("cell");
let ccolor=true;
let greencolor=0;
let gc2=greencolor+100;


let reslen=0;
for(let g=0;g<alen;g++)
{
    if(animate[g].length==3){
        reslen++;
    }
}


for(let i=0;i<alen;i++)
    {
        if(animate[i].length==2)
        {
            if(ccolor)
            {
                const[node]=animate[i];
                setTimeout(()=>{
                cells[node].style.backgroundColor="yellow";

            },i*speedanim);
            ccolor=false;
        }
        else{
            const[node]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="white";

            },i*speedanim);
            
            ccolor=true;


        }

        }
        else if(animate[i].length==1)
        {
            const[node]=animate[i];
            setTimeout(()=>{
                cells[node].style.backgroundColor="orange";

            },i*speedanim);

        }
    //   else if(animate[i].length==3)
    //     {
    //         const[node,node2]=animate[i];
    //         setTimeout(()=>{
    //             cells[node].style.backgroundColor="white";

    //         },i*speedanim);

    //     }
        else if(animate[i].length==3){
            //let greencolor=0;
            const[node,node2]=animate[i];
            
                setTimeout(()=>{
                   
                    let myc1=Math.floor(greencolor);
                    let myc2=Math.floor(gc2);
                    cells[node].style.backgroundColor=`rgb(${myc1},${myc2},0)`;
                    greencolor+=120/reslen;
                    gc2+=120/reslen;
                   
                },i*speedanim);

            
        }
        else{
            const [node]=animate[i];
           // console.log(node);
           

                setTimeout(()=>{
                cells[node].style.backgroundColor="white";

                },i*speedanim);


            
        }

    }



}

handleChangeDims=(value)=>{
this.setState({
    colnum:value
})
this.genmaze();
}

handleSpeed=(value)=>{
    this.setState({
        speedOfAnim:value
    })
}




    render() { 
        const Wheight=this.state.Wheight;
        const Wwidth=this.state.Wwidth;


const speedOfAnim=this.state.speedOfAnim;
const colnum=this.state.colnum;
const cellnum=colnum**2;
const griddim=this.state.Wwidth*0.8;
const mygrid=[];
for(var x=1;x<=cellnum;x++)
mygrid.push(x);

        return ( 
            <React.Fragment>


<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
    Path Finding
      <h3 className="navbar-brand" ><h1>Path Finding</h1></h3>
    </div>
    <button  className="btn btn-success navbar-btn" onClick={this.genmaze} style={{ margin: "2px" }}> Generate Maze </button>
    <button  className="btn btn-success navbar-btn" onClick={this.mazeanimate} style={{ margin: "2px" }}> BFS </button>
    <button  className="btn btn-success navbar-btn" onClick={this.dfsmazeanimate} style={{ margin: "2px" }}> DFS </button>
   

    <ul className="nav navbar">
      
      <li className="links"><Link to="/home" className="links">Home</Link></li>
      
    </ul>
   
    
  </div>
</nav>


                {/* <Button onClick={this.genmaze}>Generate maze</Button>
                <Button onClick={this.mazeanimate}>Solve maze</Button>
                <Button onClick={this.dfsmazeanimate}>Dfs maze</Button> */}


<div className="allbtns" style={{gridGap:Wwidth/8}}>
    <div className='sliderdims' style={{ marginLeft:"20px"}}>
            <h4>Maze Size</h4>
               <Slider
              min={5}
              max={120}
              value={colnum}
             // onChangeComplete={this.handlecompleteanim}
              onChange={this.handleChangeDims}
    
            />
          </div>
          <div className='speedslider' style={{ marginLeft:"20px"}}>
            <h4>Animation Speed</h4>
               <Slider
              min={1}
              max={50}
              value={speedOfAnim}
             // onChangeComplete={this.handlecompleteanim}
              onChange={this.handleSpeed}
    
            />
          </div>
</div>





                <div className="mymaze" display="grid" width="70%" style= {{height:`${griddim}px`,width:`${griddim}px`,gridTemplateColumns: `repeat(${colnum}, auto)`} }>
                

                    {mygrid.map((item,idx)=>{
                    //console.log(item);

                        return(
                            <div className="cell" id={idx} key={idx}  padding="20px" border="1px" style={{backgroundColor:"white"}} >

                            {/* {idx} */}
                            </div>
                        )

                    })}

                </div>



            </React.Fragment>
         );
    }
}
 
export default Mazesolver;