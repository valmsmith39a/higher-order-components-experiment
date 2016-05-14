import React from 'react';

export var data = (ComposedComponent) => class extends React.Component {
  constructor() {
    this.state = { data: null };
  }

  componentDidMount() {
    this.setState({data:'hello from dataHOC'})
  }
  
  render() {
    // <Component Increment={this.increment.bind(this)} />
    return <ComposedComponent {...this.props} {...this.state} />
  }
}
