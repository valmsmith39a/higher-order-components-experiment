import React from 'react';

export var Data = (ComposedComponent) => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data:'whoa' };
  }

  componentDidMount() {
    this.setState({data:'hello from dataHOC'})
  }

  greeting() {
    console.log('hello George');
  }

  render() {
    // <Component Increment={this.increment.bind(this)} />
    return <ComposedComponent {...this.props} greeting={this.greeting.bind(this)}/>
  }
}
