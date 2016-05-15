import React from 'react';
import { Increment } from './increment.js';

class DisplayComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.incrementCounterFunction();
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}> Increment: {this.props.counter}</button>
        {this.counter}
      </div>
    );
  }
}

export default Increment(DisplayComponent);
