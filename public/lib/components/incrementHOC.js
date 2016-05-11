import React from 'react';
import Increment from './increment.js';

class DisplayComponent extends React.Component {
  render(){
    return('hello from display component');
  }
}

export default Increment(DisplayComponent);
