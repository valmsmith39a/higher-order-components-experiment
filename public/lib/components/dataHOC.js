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
