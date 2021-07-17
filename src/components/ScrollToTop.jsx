import React, { Component } from 'react';
import { withRouter } from "react-router";
class ScrollToTop extends Component {
    state = {  }
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location.pathname !== prevProps.location.pathname) {
          window.scrollTo(0, 0);
        }
      }
    render() { 
        const { children } = this.props;
    return children;
    }
}
 
export default withRouter(ScrollToTop);