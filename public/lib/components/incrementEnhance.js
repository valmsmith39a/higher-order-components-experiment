import React from 'react';
import { IncrementEnhancerHOC } from './IncrementEnhancerHOC';

class DisplayIncrementComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log('props in DisplayIncrememntComponent: ', this.props);
  }

  handleClick() {
    this.props.incrementCounter();
  }

  render() {
    return(
      <div>
        Hello from Display Increment Component
        <button onClick={}>Increment</button>
        Counter is: {this.props.counter}
      </div>
    )
  }
}

export default IncrementEnhancerHOC(DisplayComponent)
