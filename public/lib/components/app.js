import React from 'react';
import IncrementHOC from './incrementHOC.js';
import DataHOC from './dataHOC.js';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <IncrementHOC />
        <DataHOC initialProps={'initial props'} />
      </div>
    )
  }
}
