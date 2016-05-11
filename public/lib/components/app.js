import React from 'react';
import IncrementHOC from './increment.js';

export default class App extends React.Component {
  render() {
    return(
      <div>hello from App class component
        <IncrementHOC />
      </div>
    )
  }
}
