import React from "react";
import ReactDOM from "react-dom";
import StyleView from "./StyleView";
import StyleStat from "./StyleStat";
import Influencer from "./Influencer";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./mainpage/MainPage";
import { BrowserRouter, Route } from "react-router-dom";
import Entertain from "./Entertain";
import PlayLogin from "./learn_more/PlayLogin";
import styled from "styled-components";

const Total = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  margin: 0;
  font-weight: 300;
  overflow-x: hidden;
`;

// import "./mainpage/MainC.css";
function App() {
  return (
    <Total>
      {/*  시작페이지  */}
      <Route exact path="/">
        <MainPage />
      </Route>
      {/*  결과 */}
      <Route path="/result">
        <StyleView />
        <StyleStat />
        <Entertain />
        <Influencer />
        <PlayLogin />
      </Route>
    </Total>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
