import React, { Component } from "react";
import "./Play1Final.css";

class UserGreeting extends Component {
  render() {
    return (
      <div>
        <h1 class="lastTitle"> {this.props.title} </h1>
        <div class="lastCont"> {this.props.desc} </div>
      </div>
    );
  }
}

class EndPlay extends Component {
  render() {
    return (
      <div id="nextBox">
        <a href="/" class="nextButton">
          {this.props.name}
        </a>
      </div>
    );
  }
}

class EndPlay1 extends Component {
  render() {
    return (
      <div id="logTemp">
        <a
          href="/"
          onClick={function (e) {
            e.preventDefault();
            this.props.changeLog();
          }.bind(this)}
        >
          {" "}
          {this.props.finish}{" "}
        </a>
      </div>
    );
  }
}

class PlayLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      title: "더 알아보기",

      desc: "hello world",
      descLogout:
        "더 재미있는 play기능과 LookyLooks 서비스를 이용하고 싶으시면 로그인 하세요!",
      descLogin: "다른 재미있는 play기능도 이용해보세요!",

      finish: "hello",
      guestPlayFinish: "더 알아보기",
      userPlayFinish: "다른 Play 해보기",
    };
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div>
            <UserGreeting
              title={this.state.title}
              desc={this.state.descLogin}
            ></UserGreeting>
            <EndPlay name={this.state.userPlayFinish}></EndPlay>
          </div>
        ) : (
          <div>
            <UserGreeting
              title={this.state.title}
              desc={this.state.descLogout}
            ></UserGreeting>
            <EndPlay name={this.state.guestPlayFinish}></EndPlay>
          </div>
        )}

        {/* 아래는 로그인 상태 바꾸는 임시 기능*/}

        <EndPlay1
          changeLog={function () {
            this.setState({
              isLoggedIn: true,
            });
          }.bind(this)}
          finish="로그인 상태로"
        ></EndPlay1>
        <EndPlay1
          changeLog={function () {
            this.setState({
              isLoggedIn: false,
            });
          }.bind(this)}
          finish="로그아웃 상태로"
        ></EndPlay1>
      </div>
    );
  }
}

export default PlayLogin;
