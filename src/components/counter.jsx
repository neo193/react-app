import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  formatCounter() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  handleReset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };

  spanClasses() {
    var classes = "badge m-2 bg-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }

  render() {
    return (
      <main className="container d-flex">
        <span
          style={{ fontSize: 30, width: "150px" }}
          className={this.spanClasses()}
        >
          {this.formatCounter()}
        </span>
        <button
          style={{ width: "60px" }}
          onClick={this.handleIncrement}
          className="btn btn-primary m-2"
        >
          +
        </button>
        <button
          style={{ width: "60px" }}
          disabled={this.state.count === 0}
          onClick={this.handleDecrement}
          className="btn btn-primary m-2"
        >
          -
        </button>
        <button
          style={{ width: "60px" }}
          hidden={this.state.count === 0}
          onClick={this.handleReset}
          className="btn btn-danger m-2"
        >
          Reset
        </button>
      </main>
    );
  }
}

export default Counter;
