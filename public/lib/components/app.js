import React from 'react';
import DisplayIncrementEnhanced from './incrementEnhance.js';
import CounterWithPropsValidationEx from './CounterWithPropsValidationEx.js';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <DisplayIncrementEnhanced startMessage={'Start counting!'} />
        <CounterWithPropsValidationEx initialGreeting={'This is counter example with props validation!'} initialCounter={5} />
      </div>
    )
  }
}
