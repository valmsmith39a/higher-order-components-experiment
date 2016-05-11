import React from 'react';
import { Increment } from './increment.js';

class DisplayComponent extends React.Component {
  render(){
    return(<div>Hello from display component</div>);
  }
}

export default Increment(DisplayComponent);
