import React from 'react'; 
import { Component } from 'react';

export var Increment = DisplayComponent => class extends Component {
  render() {
    return(
      <div>
        Hello from Increment Component
        <DisplayComponent />
      </div>
    );
  }
}
