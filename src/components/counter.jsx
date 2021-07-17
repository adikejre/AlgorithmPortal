import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'; 
import './sort.css';
import * as sortmethods from '../sortingalgos/sortingfncs';
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

class Counter extends Component {

    constructor(props) {
        super(props);
       
      }

state={
    arrvals:[],
    arrnum:50,
    animspeed:10,
    Wwidth: window.innerWidth, 
    Wheight: window.innerHeight

};

componentDidMount(){
    this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
    this.randarray();
}
componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

updateWindowDimensions=() =>{
    this.setState({ Wwidth: window.innerWidth, Wheight: window.innerHeight });
  }


randarray=()=> {
    let arr=[];
    this.setState({arrvals:arr});
    for(var i=0;i<this.state.arrnum;i++){
        arr.push(Math.floor(Math.random() * (550 - 20) + 20));
        this.setState({arrvals:arr});
    }

}




insertionSort=()=>{
    let n=this.state.arrnum;
    let ar=this.state.arrvals;
    var i,j,k;
    const animate=[];
    

    for(i=0;i<n;i++)
    {   var minid=i;
        
        for(j=i+1;j<n;j++)
        { 
            
            animate.push([j]);
            animate.push([i,j]);

            if(ar[minid]>ar[j])
            {
                
                minid=j;
                
            

            }
            
         

        }
        animate.push([i,minid,ar[minid],ar[i]]);
        var tmp=ar[i];
        var comp1=document.getElementsByClassName('mybars')[i];
        var comp2=document.getElementsByClassName('mybars')[minid];


        
        ar[i]=ar[minid];
       
       
        ar[minid]=tmp;
       
        

       
    }

    // for(i=0;i<n;i++)
    // {
    //     animate.push([i,i,i]);
    // }

    return animate;
}



animateinsertion=()=>{
    const animations=this.insertionSort();
    for(var w=0;w<animations.length;w++){
        console.log("anim",animations[w][0]);
    }
    
    let j=0;
    let n=this.state.arrnum;
    let speed=this.state.animspeed;
    let myar=this.state.arrvals;
    let q=2*(n-1);
    
    for(let i=0;i<animations.length;i++)
    {
        const arrayBars=document.getElementsByClassName('mybars');
        
            if(animations[i].length===4){
                
                setTimeout(() => {
                    const [barOneIdx, newHeightidx,newHeight,bar1h] = animations[i];
                   // console.log("n swap",barOneIdx,newHeightidx);
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const temp= bar1h; //barOneStyle.height;

                    barOneStyle.height = `${newHeight}px`;
                    //console.log("check ",arrayBars[newHeightidx].style.height,newHeight);
                    arrayBars[newHeightidx].style.height= `${temp}px`;
                    

                  }, i * speed);
                //swap
            }
            else{

               
            //    if(animations[i].length===3){
            //     const [greenbar] = animations[i]; 
            //     setTimeout(() => {
            //         arrayBars[greenbar].style.backgroundColor = "green";
                    
            //       }, i * speed);

            //    }




                if(animations[i].length===1){
                    const [barOneIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                
                    setTimeout(() => {
                        barOneStyle.backgroundColor = "red";
                        
                      }, i * speed);
                }
                else{ 
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                    setTimeout(() => {
                        barOneStyle.backgroundColor = "blue";
                        barTwoStyle.backgroundColor = "blue";
                      }, i * speed);
                }
            }

        
    }


  

}



animatebubble=()=>{
const animations=sortmethods.bubbleanimations(this.state.arrvals);
const arrayBars=document.getElementsByClassName('mybars');
let speed=this.state.animspeed;
let n=this.state.arrnum;
for(let i=0;i<animations.length;i++)
{
    if(animations[i].length===2){
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
    
    setTimeout(()=>{
        barOneStyle.backgroundColor = "red";
        barTwoStyle.backgroundColor = "red";

    },i*speed);
    }

    if(animations[i].length===3){
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
    
    setTimeout(()=>{
        barOneStyle.backgroundColor = "blue";
        barTwoStyle.backgroundColor = "blue";

    },i*speed);
    }

    if(animations[i].length===4){
        const [barOneIdx,barOneh, barTwoIdx,barTwoh] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
    
    setTimeout(()=>{
        
        
        barOneStyle.height=`${barTwoh}px`;
        barTwoStyle.height=`${barOneh}px`;

    },i*speed);
    }
    // if(animations[i].length===1){
    //     const [greenbar] = animations[i]; 
    //     setTimeout(() => {
    //         arrayBars[greenbar].style.backgroundColor = "green";
            
    //       }, i * speed);

    //    }


    

}




}




animatemerge=()=>{
    
    const animations=sortmethods.msortanimations(this.state.arrvals);
    const arrayBars=document.getElementsByClassName('mybars');
    let n=this.state.arrnum;
    let speed=this.state.animspeed;
   // console.log(animations.length);
for(let i=0;i<animations.length;i++){

    // if(animations[i].length===1){
    //     const [greenbar] = animations[i]; 

    //     setTimeout(() => {
    //         arrayBars[greenbar].style.backgroundColor = "green";
            
    //       }, i * speed);

    //    }

    if(i%3!==2){
        var changecolor="red";
        if(i%3==0){
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
        
        setTimeout(()=>{
            barOneStyle.backgroundColor = "red";
            barTwoStyle.backgroundColor = "red";
    
        },i*speed);
        }
        if(i%3==1){
            changecolor="blue";
        
        const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
        
        setTimeout(()=>{
            barOneStyle.backgroundColor = "blue";
            barTwoStyle.backgroundColor = "blue";
    
        },i*speed);
    }
    }
    else{ 
        const [heightIdx, newheight] = animations[i];
        const barOneStyle = arrayBars[heightIdx].style;
        setTimeout(()=>{
        
        
            barOneStyle.height=`${newheight}px`;
            
    
        },i*speed);
        

    }


}



}

animatequicksort=()=>{

    const animations=sortmethods.quicksortanimations(this.state.arrvals);
    const arrayBars=document.getElementsByClassName('mybars');
    let speed=this.state.animspeed;
    let n=this.state.arrnum;
    let col=true;
    let col2=true;
    for(let i=0;i<animations.length;i++){

    if(animations[i].length===3){

        const [pivotIdx] = animations[i];
        const barOneStyle = arrayBars[pivotIdx].style;
        setTimeout(()=>{
            barOneStyle.backgroundColor = "green";
    
        },i*speed);

    }



    if(animations[i].length===2){
        const [pivotIdx] = animations[i];
        const barOneStyle = arrayBars[pivotIdx].style;
        setTimeout(()=>{
            barOneStyle.backgroundColor = "blue";
    
        },i*speed);
        
    
       

    }
    if(animations[i].length===1){

        const [barOneIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        
        
    if(col){
    setTimeout(()=>{
        barOneStyle.backgroundColor = "red";
    },i*speed);
    col=false;
    }

    else{
        setTimeout(()=>{
            barOneStyle.backgroundColor = "blue";
        },i*speed);
        col=true;
    }

    }

    if(animations[i].length===4){
        const [barOneIdx,barOneh, barTwoIdx,barTwoh] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        
    
    setTimeout(()=>{
        
        
        barOneStyle.height=`${barTwoh}px`;
        barTwoStyle.height=`${barOneh}px`;

    },i*speed);

    }






    }

}

animateheapsort=()=>{
    const animations=sortmethods.heapsortanimations(this.state.arrvals);
    const arrayBars=document.getElementsByClassName('mybars');
    let speed=this.state.animspeed;
    let n=this.state.arrnum;
    let col=true;
    for(let i=0;i<animations.length;i++){

        if(animations[i].length===1){

            const [barOneIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            
            
        if(col){
        setTimeout(()=>{
            barOneStyle.backgroundColor = "red";
        },i*speed);
        col=false;
        }
    
        else{
            setTimeout(()=>{
                barOneStyle.backgroundColor = "blue";
            },i*speed);
            col=true;
        }
    
        }


        if(animations[i].length===2){

            const [largestIdx] = animations[i];
            const barOneStyle = arrayBars[largestIdx].style;
            setTimeout(()=>{
                barOneStyle.backgroundColor = "green";
        
            },i*speed);
    
        }

        if(animations[i].length===3){

            const [largestIdx] = animations[i];
            const barOneStyle = arrayBars[largestIdx].style;
            setTimeout(()=>{
                barOneStyle.backgroundColor = "blue";
        
            },i*speed);
    
        }

        if(animations[i].length===4){
            const [barOneIdx,barOneh, barTwoIdx,barTwoh] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            
        
        setTimeout(()=>{
            
            
            barOneStyle.height=`${barTwoh}px`;
            barTwoStyle.height=`${barOneh}px`;
    
        },i*speed);
    
        }



    }
    


}



handleChangeNo = value => {
    this.setState({
      arrnum: value
    })
    this.randarray();
  };


  handleChangeAnim = value => {
    this.setState({
      animspeed: value
    })
    
  };
handlecompleteanim=()=>{
    this.randarray();
    const a=this.state.arrnum;
    var highestTimeoutId = setTimeout(";");
for (var i = 0 ; i < highestTimeoutId ; i++) {
    clearTimeout(i); 
}
this.setState({
    arrnum: a
  })
 // this.randarray();


}

handlecompleteNo=(value)=>{
    
    //const a=this.state.arrnum;
    var highestTimeoutId = setTimeout(";");
for (var i = 0 ; i < highestTimeoutId ; i++) {
    clearTimeout(i); 
}
this.setState({
    arrnum: value
  })
  this.randarray();
}





    render() {
        const arrvals=this.state.arrvals;
        const arrnum=this.state.arrnum;
        const animspeed=this.state.animspeed;
        const Wheight=this.state.Wheight;
        const Wwidth=this.state.Wwidth;

        return(  
        
        <React.Fragment >
<Helmet>
                <style>{'body { background: linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2); }'}</style>
            </Helmet>


    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
    Sorting Algorithms
      <h3 class="navbar-brand" ><h1>Sorting Algorithms</h1></h3>
    </div>
    <button  class="btn btn-danger navbar-btn" onClick={this.randarray} style={{ margin: "2px" }}> Reset </button>
    <button  class="btn btn-danger navbar-btn" onClick={this.animateinsertion} style={{ margin: "2px" }}> Insertion sort </button>
    <button  class="btn btn-danger navbar-btn" onClick={this.animatebubble} style={{ margin: "2px" }}> Bubble sort </button>
    <button  class="btn btn-danger navbar-btn" onClick={this.animatemerge} > Mergesort </button>
    <button  class="btn btn-danger navbar-btn" onClick={this.animatequicksort} > Quicksort </button>
    <button  class="btn btn-danger navbar-btn" onClick={this.animateheapsort} > Heapsort </button>


    <ul class="nav navbar">
      <li class="links"><Link to="/home" class="links">Home</Link></li>
      <li class="links"><Link to="/sortinfo" class="links">Learn about Sorting Algorithms</Link></li>
      <li class="links"><Link to="/implementalgos" class="links">Implement Sorting Algorithms</Link></li>
    </ul>
   
    
  </div>
</nav>
       <div className="allbtns" style={{gridGap:Wwidth/8}}>
       
        <div className='slider'>
        <h5>Size of Array</h5>
        <Slider
          min={20}
          max={200}
          value={arrnum}
         
          onChange={this.handleChangeNo}
          //onChangeComplete={this.handlecompleteNo}
          //onChangeStart={this.handlecompleteNo}
          
        />
        </div>
        
        <div className='slider2'>
        <h5>Animation Speed</h5>
           <Slider
          min={5}
          max={100}
          value={animspeed}
          onChangeComplete={this.handlecompleteanim}
          onChange={this.handleChangeAnim}
          
        />
      </div>
      

        </div>
        <div className="allbars">
        {arrvals.map((val,i)=>
        <div className="mybars" style={ {height:val,width:Wwidth*0.6/arrnum}} key={i}> </div>
        )

        }
        </div>

       
        </React.Fragment>
        );
    }
}

export default Counter;