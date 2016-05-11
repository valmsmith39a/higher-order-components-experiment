import React from 'react';
import { Increment } from './increment.js';

class DisplayComponent extends React.Component {
  render(){
    if(!this.counter) return (<div>Waiting for counter...</div>);
    return(
      <div>
        Hello from display component
        {this.counter}
      </div>
    );
  }
}

export default Increment(DisplayComponent);
