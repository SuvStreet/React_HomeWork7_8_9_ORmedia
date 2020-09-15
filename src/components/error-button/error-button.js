import React from "react";

export default class ErrorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 5 }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter - 1,
    }));
  }

  render() {
    if (this.state.counter === 0) {
      throw new Error('I crashed!');
    }

    return (
      <React.Fragment>
        <button onClick={this.handleClick}>
          Dead Project through {this.state.counter} click
        </button>
      </React.Fragment>
    );
  }
}