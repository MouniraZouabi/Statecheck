import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    return (
      <>
        <h3>
          {this.state.count}
        </h3>
      </>
      
    );
  }
}

export default Counter;
