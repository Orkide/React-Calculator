import React, { Component } from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";

class App extends Component {
  state = {
    result: ""
  };

  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "C") {
      this.setState({
        result: ""
      });
    } else {
      this.setState({
        result: this.state.result + buttonName
      });
    }
    if (buttonName === "CE") {
      this.backspace();
    }
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "Error!"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <KeyPad
          buttonPressed={this.buttonPressed}
          result={this.state.result || 0}
        />
      </div>
    );
  }
}

export default App;
