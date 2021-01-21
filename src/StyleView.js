import React, { Component } from "react";
import "./StyleView.css";
import { AiOutlineInstagram } from "react-icons/ai";

class StyleView extends Component {
  state = {
    opacity: 0,
    visibility: "hidden",
  };

  render() {
    return (
      <div className="StyleView">
        <div className="style_background"></div>
        <h1>당신의 패션 스타일 (유형)은?</h1>
        <div className="view_container">
          {/*<img src="./people.png" className="photo"></img>*/}
          <div id="whiteBox1">
            <div
              id="snsShow"
              onMouseOver={() =>
                this.setState({ opacity: 1, visibility: "visible" })
              }
              onMouseOut={() =>
                this.setState({ opacity: 0, visibility: "hidden" })
              }
            >
              <a href="/">
                <img src="./people.png" id="photo"></img>
              </a>
            </div>

            <div
              className="snsLink1"
              style={{
                opacity: this.state.opacity,
                visibility: this.state.visibility,
              }}
            >
              <div id="sns">
                <AiOutlineInstagram size={20} />
                <span>Follow Aenean lacinia efficitur</span>
              </div>
            </div>
          </div>
          <div className="view_text">
            <h4>강상원</h4>
            <h3>Urban Style</h3>
            <p className="say">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec acleo neque. Pellentesque sed"
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec leo neque. Pellentesque sed est mattis, rhoncus
              elit eu,tortor quis interdum fermentum, magna leo pulvinar arcu,
              cursus rhoncus nulla turpis quis sem. Aenean lacinia efficitur ex,
              eget lobortis purus ven
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StyleView;
