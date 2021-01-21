import React from "react";
import "./Influencer.css";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import { GrClose } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";

const data = [
  {
    data: {
      battery: 0.7,
      design: 0.8,
      useful: 0.9,
      speed: 0.67,
      weight: 0.8,
      hello: 0.7,
      hallo: 0.5,
      hbello: 0.7,
      hcello: 0.5,
      hdello: 0.6,
    },
    meta: { color: "blue" },
  },
  {
    data: {
      battery: 0.6,
      design: 0.85,
      useful: 0.5,
      speed: 0.6,
      weight: 0.7,
      hello: 0.6,
      hallo: 0.7,
      hbello: 0.6,
      hcello: 0.55,
      hdello: 0.7,
    },
    meta: { color: "red" },
  },
];

const captions = {
  // columns
  battery: "Contemporary",
  design: "Formal",
  useful: "Urban",
  speed: "Feminine",
  weight: "Basic",
  hello: "Boyish",
  hallo: "Unique",
  hbello: "Business",
  hcello: "Feminine",
  hdello: "Basic",
};

class Influencer extends React.Component {
  state = {
    data: null,
    person: 1,
    opacity: 0,
    visibility: "hidden",
    scroll: "scroll",
    opacity2: 0,
    visibility2: "hidden",
    zIndex: 0,
  };

  showDetails = (prop) => {
    console.log(prop + "Selected!!!");
    document.body.style.overflowY = "hidden";
    this.setState({
      person: prop,
      opacity: 1,
      visibility: "visible",
    });
  };

  render() {
    return (
      <div className="Influencer">
        <div
          className="background"
          onClick={() => {
            this.setState({ opacity: 0, visibility: "hidden" });
            document.body.style.overflowY = "scroll";
          }}
          style={{
            opacity: this.state.opacity,
            visibility: this.state.visibility,
          }}
        >
          <GrClose size={20} className="X" />
          <div>
            <a
              href="/"
              onMouseOver={() =>
                this.setState({ opacity2: 1, visibility2: "visible" })
              }
              onMouseOut={() =>
                this.setState({ opacity2: 0, visibility2: "hidden" })
              }
            >
              <img src="./people.png" />
            </a>
            <div
              className="snsLink1"
              style={{
                opacity: this.state.opacity2,
                visibility: this.state.visibility2,
              }}
            >
              <div id="sns">
                <AiOutlineInstagram size={20} />
                <span>Follow Aenean lacinia efficitur</span>
              </div>
            </div>
          </div>

          <div className="detail_text">
            <h3>Influencer {this.state.person}</h3>
            <p>
              Lorem Ipsum em. Aenean lacinia efficitur ex, eget lobortis purus
              venem. Aenean lacinia efficitur ex, eget lobortis purus ven em.
              Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven em. Aenean lacinia
              efficitur ex, eget lobortis purus venem. Aenean lacinia efficitur
              ex, eget lobortis purus ven
            </p>
            <div className="Chart">
              <RadarChart
                captions={captions}
                data={data}
                size={300}
                dots={true}
              />
            </div>
          </div>
        </div>
        <h1>이런 인플루언서도 있어요...</h1>
        <div className="list_container">
          <div className="influencer_container">
            <img
              onClick={() => {
                this.showDetails(1);
              }}
              src="./people.png"
            />
            <p className="influencer_name">LOREM</p>
            <p>
              em. Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven
            </p>
          </div>
          <div className="influencer_container">
            <img
              onClick={() => {
                this.showDetails(2);
              }}
              src="./people.png"
            />
            <p className="influencer_name">IPSUM</p>
            <p>
              em. Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven
            </p>
          </div>
          <div className="influencer_container">
            <img
              onClick={() => {
                this.showDetails(3);
              }}
              src="./people.png"
            />
            <p className="influencer_name">DOLOR</p>
            <p>
              em. Aenean lacinia efficitur ex, eget lobortis purus ven em.
              Aenean lacinia efficitur ex, eget lobortis purus ven
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Influencer;
