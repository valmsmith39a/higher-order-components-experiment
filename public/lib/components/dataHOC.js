import React from 'react';
import { data } from './data';

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    console.log('state: ', this.state);
    console.log('props: ', this.props);
  }

  render() {
    return(
      <div>
        hello from display data:
      </div>
    )
  }
}

export default data(DisplayData);
