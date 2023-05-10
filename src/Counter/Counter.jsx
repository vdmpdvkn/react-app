import React, { Component } from "react";
import css from "./Counter.module.css";
class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    step: this.props.step,
    value: this.props.initialValue,
  };
  onIncrementBtnClick = () => {
    this.setState((prevState) => ({
      value: prevState.value + this.state.step,
    }));
  };
  onDecrementBtnClick = () => {
    this.setState((prevState) => ({
      value: prevState.value - this.state.step,
    }));
  };
  onRangeInputChange = (evt) => {
    this.setState({ step: Number(evt.target.value) });
  };
  render() {
    const { step } = this.props;

    return (
      <div className={css.counterWrapper}>
        <span>{this.state.value}</span>
        <button
          onClick={this.onIncrementBtnClick}
          type="button"
          className={css.button}
        >
          Increment by {this.state.step}
        </button>
        <button
          onClick={this.onDecrementBtnClick}
          type="button"
          className={css.button}
        >
          Decrement by {this.state.step}
        </button>
        <p>Choose your step</p>
        <input
          type="range"
          name="range"
          id="range"
          min={0}
          max={100}
          onChange={this.onRangeInputChange}
        />
      </div>
    );
  }
}
export default Counter;
