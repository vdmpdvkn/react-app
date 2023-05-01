import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };
  onIncrementBtnClick = () => {
    this.setState((prevState) => ({
      value: prevState.value + this.props.step,
    }));
  };
  onDecrementBtnClick = () => {
    this.setState((prevState) => ({
      value: prevState.value - this.props.step,
    }));
  };
  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button onClick={this.onIncrementBtnClick} type="button">
          Увеличить на {step}
        </button>
        <button onClick={this.onDecrementBtnClick} type="button">
          Уменьшить на {step}
        </button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Counter step={5} />
);
