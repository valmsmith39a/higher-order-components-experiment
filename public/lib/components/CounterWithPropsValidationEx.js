import React from 'react';

export default class CounterWithPropsValidataionEx extends React.Component {

  constructor(props) {
    super(props)
    this.state = { counter: props.initalCounter }
    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({ counter: this.state.counter + 1})
  }

  render() {
    return(
      <div>
        <p>Hello from Props Validation Ex</p>
        <button onClick={this.increment}> IncrementBtn </button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}
