import React, { Component } from "react";
import styled from "styled-components";
import Button from "./components/Button";

const StartPage = styled.div`
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
class MainPage extends Component {
  state = {
    title: "Lorem ipsum dolor sit amet",
    contents:
      " consectetur adipiscing elitPellentesque nec leo neque. Pellentesque sed est mattis, rhoncus elit eu",
    start: "시작",
  };

  render() {
    return (
      <StartPage>
        <h2> {this.state.title}</h2>
        <div>{this.state.contents}</div>
        <Button link="/result" label={this.state.start} size="large" />
      </StartPage>
    );
  }
}

export default MainPage;
