import React from 'react';

export const dataHOC = (ComposedComponent) => class extends React.Component {
  constructor(props) {
    super(props)
    console.log('props in dataHOC', this.props);
    this.state = {
      data: 'some data',
      someFunction: function() { console.log('hello world') }
    }
    var someObject = {};
  }

  function someFunction() {
    console.log('hello i am some function');
  }

  render() {
    return <ComposedComponent {...this.props} {...this.state} />;
  }
}



// import React from 'react';
//
// export const HOC = (Component) => class extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   // do whatever you may want
//   render() {
//     // pass new properties to wrapped component
//     return <Component {...this.props} {...this.state} />
//   }
// };


// import React from 'react';
//
// export var Data = (ComposedComponent) => class extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { data: null };
//   }
//
//   componentWillMount() {
//     this.setState({data:'hello from dataHOC'})
//   }
//
//   render() {
//     return <ComposedComponent {...this.props} data={this.state.data} />
//   }
// }

// import React, { Component } from 'react';
//
// export var data = ComposedComponent => class extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { data: null };
//   }
//   componentDidMount() {
//     this.setState({ data: 'Hello' });
//   }
//   render() {
//     return <ComposedComponent {...this.props} data={this.state.data} />;
//   }
// };
