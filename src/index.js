import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StyleView from "./StyleView";
import StyleStat from "./StyleStat";
import Influencer from "./Influencer";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./mainpage/MainPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="total">
      {/*  시작페이지  */}
      <Route exact path="/">
        <MainPage />
      </Route>
      {/*  결과 */}
      <Route path="/result">
        <StyleView />
        <StyleStat />
        <Influencer />
      </Route>
    </div>
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
