/*

We want to give DisplayData component access to other functionality in dataHOC function (a higher order component - a function that takes or returns another component) in data.js, by wrapping DisplayData in another component - the component returned by the function dataHOC.

*/

import React from 'react';
import { dataHOC } from './data';

class DisplayData extends React.Component {
  constructor(props) {
    super(props)
    console.log('Display data props is: ', this.props);
  }
  render() {
    return(
      <div>
        Hello from Display Data
        <p>Data is: {this.props.data}</p>
        {this.props.someFunction()}
      </div>
    )
  }
}

export default dataHOC(DisplayData);





// // import { data } from "./Enhance";
// //
// // class MyComponent {
// //   render() {
// //     if (!this.data) return <div>Waiting...</div>;
// //     return <div>{this.data}</div>;
// //   }
// // }
// //
// // export default Enhance(MyComponent); // Enhanced component
//
//
// import React from 'react';
// import { Data } from './data';
//
// class DisplayData extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('state is: ', this.state);
//   }
//
//   render() {
//     return(
//       <div>
//         hello from display data:
//       </div>
//     )
//   }
// }
//
// export default Data(DisplayData);
//
// import React from 'react';
// import { HOC } from "./data";
//
// class MyComponent extends React.Component {
//   render() {
//     // if (!this.data) return <div>Waiting...</div>;
//     return <div>{this.data}</div>;
//   }
// }
//
// export default HOC(MyComponent); // Enhanced component
