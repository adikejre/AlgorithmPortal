import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hometop from './hometop';
import Cards from './cards';
class Homepg extends Component {
    state = {  }
    render() { 
        return ( 
<React.Fragment>
<Hometop/>
<Cards/>
</React.Fragment>


        );
    }
}
 
export default Homepg;