import React from 'react';

export default class CounterWithPropsValidationEx extends React.Component {

  constructor(props) {
    super(props)
    this.state = { counter: props.initialCounter }
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

CounterWithPropsValidationEx.propTypes = { initialCounter: React.PropTypes.number.isRequired }
