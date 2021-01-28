import React from "react";
import ReactDOM from "react-dom";
import StyleView from "./StyleView";
import StyleStat from "./StyleStat";
import Influencer from "./Influencer";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./MainPage";
import { BrowserRouter, Route } from "react-router-dom";
import Media from "./Media";
import LearnMore from "./LearnMore";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 300;
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <React.Fragment>
      {/*  시작페이지  */}
      <Route exact path="/">
        <MainPage />
      </Route>
      {/*  결과 */}
      <Route path="/result">
        <StyleView />
        <StyleStat />
        <Media />
        <Influencer />
        <LearnMore />
      </Route>
    </React.Fragment>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
