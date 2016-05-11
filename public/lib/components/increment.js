import React from 'react';

export var Increment = DisplayComponent => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 'counter default is 0' };
  }
  componentDidMount() {
    this.setState({ counter: 'increment counter' });
  }
  render() {
    return(
      <div>
        Hello from Increment Component
        <DisplayComponent {...this.props} counter={this.state.counter}/>
      </div>
    );
  }
}
