import React from 'react';
import IncrementHOC from './incrementHOC.js';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <IncrementHOC />
      </div>
    )
  }
}
