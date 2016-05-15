import React from 'react';

export const dataHOC = (ComposedComponent) => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'some data',
      someFunction: this.someFunction.bind(this)
    }
  }

  someFunction() {
    console.log('hello i am some function');
  }

  render() {
    return <ComposedComponent {...this.props} {...this.state} />;
  }
}
