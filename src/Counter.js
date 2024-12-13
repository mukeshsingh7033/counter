import React from 'react';
import './counter.css';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }

  Increment() {
    this.setState(
      { count: this.state.count + 1 },
      () => {
        console.log(this.state.count);
      }
    );
  }

  Decrement() {
    if (this.state.count > 0) {
      this.setState(
        { count: this.state.count - 1 },
        () => {
          console.log(this.state.count);
        }
      );
    }
  }

  render() {
    return (
      <div className="container">
        <center>
          <h1>Interactive Counter</h1>
          <h2>Count: {this.state.count}</h2>
          <br />
          <br />
          <button onClick={this.Increment}>Increment</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.Decrement}>Decrement</button>
        </center>
      </div>
    );
  }
}

export default Counter;
