// import { Enhance } from "./Enhance";
//
// class MyComponent {
//   render() {
//     if (!this.data) return <div>Waiting...</div>;
//     return <div>{this.data}</div>;
//   }
// }
//
// export default Enhance(MyComponent); // Enhanced component


import React from 'react';
import { Data } from './data';

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    console.log('state is: ', this.state);
    console.log('props is: ', this.props);
  }
  // want DisplayData to be able to access something inside data.js

  render() {
    return(
      <div>
        hello from display data:
        
      </div>
    )
  }
}

export default Data(DisplayData);
