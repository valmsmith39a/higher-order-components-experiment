import React from 'react';
import { IncrementEnhancerHOC } from './IncrementEnhancerHOC';

class DisplayIncrement extends React.Component {
  constructor(props) {
    super(props)
    console.log('props in DisplayIncrement: ', this.props);
  }

  handleClick() {
    this.props.incrementCounter()
  }

  render() {
    return(
      <div>
        Display Increment Button and Counter
        <p>{this.props.startMessage}</p>
        <p><button onClick={this.handleClick.bind(this)}>Increment</button></p>
        <p>{this.props.counter}</p>
      </div>
    )
  }
}

export default IncrementEnhancerHOC(DisplayIncrement)
