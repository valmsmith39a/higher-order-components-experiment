import React from 'react';

export var Increment = ComposedComponent => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      incrementCounterFunction: this.incrementCounter.bind(this)
    };
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  //   <ComposedComponent counter={this.state.counter} incrementCounter={this.incrementCounter.bind(this)} />
  render() {
    return(
      <div>
        <ComposedComponent {...this.props} {...this.state} />
      </div>
    );
  }
}
