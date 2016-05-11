import React from 'react';

export var Increment = ComposedComponent => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return(
      <div>
        <ComposedComponent counter={this.state.counter} incrementCounter={this.incrementCounter.bind(this)} />
      </div>
    );
  }
}
