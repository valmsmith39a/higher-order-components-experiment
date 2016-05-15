import React from 'react';
import { IncrementEnhancerHOC } from './IncrementEnhancerHOC';

class DisplayIncrement extends React.Component {
  constructor(props) {
    super(props)
    console.log('this.props: ', this.props.counter)
  }

  render() {
    return(
      <div>
        DisplayIncrement
        <p>{this.props.counter}</p>
      </div>
    )
  }
}

export default IncrementEnhancerHOC(DisplayIncrement)
// class DisplayIncrement extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log('in display increment')
//   }
//   render() {
//     return(
//       <div>
//         Hello from Display Increment Component
//       </div>
//     )
//   }
// }

// export default IncrementEnhancerHOC()
