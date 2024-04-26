import React from "react";
import "./Watch.css";

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
    };
    this.timer = null;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleStart = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          time: prevState.time + 10,
          isRunning: true,
        }));
      }, 10);
    }
  };

  handleStop = () => {
    clearInterval(this.timer);
    this.setState({ isRunning: false });
  };

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ time: 0, isRunning: false });
  };

  formatTime = () => {
    const { time } = this.state;
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0") +
      ":" +
      String(milliseconds).padStart(3, "0")
    );
  };

  render() {
    const { isRunning } = this.state;
    return (
      <div className="watch">
        <h1>Stopwatch</h1>
        <div className="display">{this.formatTime()}</div>
        <div className="buttons">
          {!isRunning ? (
            <button onClick={this.handleStart}>Start</button>
          ) : (
            <button onClick={this.handleStop}>Stop</button>
          )}
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Watch;
