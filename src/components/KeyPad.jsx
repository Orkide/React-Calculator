import React, { Component } from "react";
import { Button, Buttons, Calc, Container, Divider, Result, Title } from "./../style/style";

export default class KeyPad extends Component {
  buttonPressed = e => {
    if (e.target.name === this.props.result && this.props.result === "00") {
      return;
    }

    if (e.target.name === this.props.result && this.props.result === "0") {
      document.getElementsByName("00").disabled = true;
      return;
    }

    this.props.buttonPressed(e.target.name);
  };

  render() {
    return (
      <>
        <Container>
          <Title>
            <Result fontsize={this.props.result}> {this.props.result} </Result>
          </Title>
          <Divider></Divider>
          <Buttons>
            {[
              {
                value: "C",
                class: "process"
              },
              {
                value: "CE",
                class: "process"
              },
              {
                value: "%",
                class: "process"
              },
              {
                value: "/",
                class: "process"
              },
              {
                value: "7",
                class: " main"
              },
              {
                value: "8",
                class: " main"
              },
              {
                value: "9",
                class: " main"
              },
              {
                value: "*",
                class: "process"
              },
              {
                value: "4",
                class: " main"
              },
              {
                value: "5",
                class: " main"
              },
              {
                value: "6",
                class: " main"
              },
              {
                value: "-",
                class: "process"
              },
              {
                value: "1",
                class: " main"
              },
              {
                value: "2",
                class: " main"
              },
              {
                value: "3",
                class: " main"
              },
              {
                value: "+",
                class: "process"
              },
              {
                value: "00",
                class: " main"
              },
              {
                value: "0",
                class: " main"
              },
              {
                value: ".",
                class: "main"
              },
              {
                value: "=",
                class: "process"
              }
            ].map(obj => (
              <Calc>
                <Button
                  name={obj.value}
                  className={obj.class}
                  onClick={this.buttonPressed}
                >
                  {obj.value}
                </Button>
              </Calc>
            ))}
          </Buttons>
        </Container>
      </>
    );
  }
}
