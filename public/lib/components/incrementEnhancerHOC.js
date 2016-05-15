import React from 'react';

export var IncrementEnhancerHOC = (ComposedComponent) => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      incrementCounter: this.incrementCounter.bind(this)
    }
  }

  incrementCounter() {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return(
      <div>
        <ComposedComponent {...this.props} {...this.state} />
      </div>
    )
  }
}
