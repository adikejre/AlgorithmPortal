import React, { Component } from 'react';
import './editorstyle.css';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/snippets/javascript";
// Import a Mode (language)
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import axios from 'axios';
import 'brace/theme/monokai';
import {Helmet} from "react-helmet";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {Link} from 'react-router-dom';


// Import a Theme (okadia, github, xcode etc)



class Implementalgos extends Component {
    state = { 
        language:"javascript",
        apiname:"nodejs",
        snippet:"console.log('hello worldddd!')",
        codeoutput:"Code Output",
        runstate:false,

        options :[

            { value: 'javascript', label: 'Javascript' },
            { value: 'python', label: 'Python'},
            { value: 'java', label: 'Java' },
            { value: 'c_cpp', label: 'C++' },

            


            // 'javascript', 'python', 'java','C++'
          ],


     }
    constructor(props) {
        super(props);
        this.refName = React.createRef();
        this.stdinref=React.createRef();
      }

componentDidMount(){

    
//     <Helmet>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.5/ace.js"
//         type="text/javascript">
//     </script>
// </Helmet>

// var editor = ace.edit("editor",{minLines: 2});
//     editor.setTheme("ace/theme/monokai");


// editor.getSession().setMode("ace/mode/javascript");
}

initeditor=()=>{
    const selectedText = this.refName.current.editor.getValue();
    const stdininp=this.stdinref.current.editor.getValue();
    console.log(selectedText);

this.setState({
    runstate:true,
    snippet:selectedText
})

const lang=this.state.apiname;
const editordata={selectedText,lang,stdininp};



//   fetch('http://localhost:4000/runcode' , {
//         method: "POST",
//         headers: {
//           'Content-type': 'application/json',
          
//         },
        
//            body: editordata,
        
        
//     }
//     ).then((response) => {console.log('Data sent'); 


//     var finaloutput=response.data.output;
//     var cputime=response.data.cpuTime;
    
//     console.log(finaloutput);
//     console.log(cputime);
    
//     var resultandTime=finaloutput.concat("\n","CPU Time:",cputime)
    
    
//     this.setState({
//         codeoutput:resultandTime,
//         runstate:false
//     })
    
//     console.log(response.data);})
    
    
//     .catch(err => {
//       console.error(err);
//     });
    









axios.post('http://localhost:4000/runcode',editordata).then((response) => {console.log('Data sent'); 


var finaloutput=response.data.output;
var cputime=response.data.cpuTime;

console.log(finaloutput);
console.log(cputime);

var resultandTime=finaloutput.concat("\n","CPU Time:",cputime)


this.setState({
    codeoutput:resultandTime,
    runstate:false
})

console.log(response.data);})


.catch(err => {
  console.error(err);
});




    // fetch('/runcode' , {
    //     method: "POST",
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
        
    //        body: JSON.stringify(jsondata)
        
        
    // }
    // ).then((result) => {
    //     console.log(result)
    //   })


    



}

onSelectlang=(option)=>{
   console.log("l",option);
   var aname="java";
   var snip= `public class MyClass {
    public static void main(String args[]) {
      int x=10;
      int y=25;
      int z=x+y;

      System.out.println("Sum of x+y = " + z);
    }
}`

   if(option.value==="javascript")
{
    aname="nodejs";
    snip=`console.log('hello worldddd!')`;

}

   if(option.value==="c_cpp")
   {aname="cpp17";
    snip=`#include <iostream>
using namespace std;
    int main() {
        cout << "Hello World!";
        return 0;
    }`;
}

   if(option.value==="python")
   {aname="python3";
   snip=`def my_function():
   print("Hello World")

my_function()`;

}
   


    this.setState({
        language:option.value,
        apiname:aname,
        snippet:snip
        
    })
    
}



    render() { 
        var language=this.state.language;
        var apiname=this.state.apiname;
        var codeoutput=this.state.codeoutput;

        
        return ( 


            
            <React.Fragment>

<Helmet>
                <style>{'body { background: linear-gradient(to right, #757f9a, #d7dde8); }'}</style>
            </Helmet>

            {/* <h1>Write and Run Code!</h1>
            
    <div className="links2">
    <Link to="#"><Button variant="outline-success">HOME</Button></Link>
        
    </div> */}


{/* <div className="links2">
    
    <Link to="#"><Button variant="outline-success">HOME</Button></Link>

    </div> */}

<nav className="mynav">
    <h1 style={{marginLeft:"15px"}}>Write and Run Code!</h1>
    <div className="links">
    <Link to="/home"><Button variant="outline-success">HOME</Button></Link>
    
    </div>


</nav>




            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Write and Run your code!</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar> */}



<div className="lang_select" >
    <label style={{font:"20px",backgroundColor:"#757f9b",height:"40px"}}><h3>Select Language</h3></label>
<Dropdown style={{backgroundColor:"#75323"}} options={this.state.options} onChange={this.onSelectlang} value="Javascript" placeholder="Select an option" />
<div id="stylelabel">
    <h3>STDIN</h3>
</div>
</div>

<div className="myeditor">
    <div id="editor">
    <AceEditor
    ref={this.refName}
    mode={language}
    theme="monokai"
   // className="editor"
    width='100%'
    height="400px"
    enableSnippets={true}
    focus={true}
    enableLiveAutocompletion={true}
    value={this.state.snippet}
    enableBasicAutocompletion={true}
    
    setOptions={{
    
        focus:true,
        fontSize:15
      }}
    
    />
    
    </div>


<AceEditor
 theme="monokai"
 ref={this.stdinref}
 className="stdin"
width="300px"
height="400px"
/>



</div>




{!this.state.runstate&&<Button size="lg" onClick={this.initeditor} id="run" >Run</Button>}
{this.state.runstate&&<Button size="lg" disabled id="run" >Running</Button>}

{/* <Button size="lg" onClick={this.initeditor} id="run" >Run</Button> */}

<div id="inp">
<AceEditor
    value={codeoutput}
    theme="monokai" 
    className="inp"
    height="200px"

/>
    
</div>




            </React.Fragment>
         );
    }
}
 
export default Implementalgos;