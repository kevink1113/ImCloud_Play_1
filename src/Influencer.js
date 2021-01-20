import React from "react";
import "./Influencer.css";

class Influencer extends React.Component {
  state = {
    data: null,
    person: 1,
    opacity: 0,
    visibility: "hidden",
    scroll: "scroll",
  };

  showDetails = (prop) => {
    console.log(prop + "Selected!!!");

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
          onClick={() => this.setState({ opacity: 0, visibility: "hidden" })}
          style={{
            opacity: this.state.opacity,
            visibility: this.state.visibility,
          }}
        >
          <img src="./people.png" />
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
          </div>
        </div>
        <h1>이런 인플루언서도 있어요...</h1>
        <div className="list_container">
          <div
            onClick={() => {
              this.showDetails(1);
            }}
            className="influencer_container"
          >
            <img src="./people.png" />
            <p>LOREM</p>
            <p>
              em. Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven
            </p>
          </div>
          <div
            onClick={() => {
              this.showDetails(2);
            }}
            className="influencer_container"
          >
            <img src="./people.png" />
            <p>IPSUM</p>
            <p>
              em. Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven
            </p>
          </div>
          <div
            onClick={() => {
              this.showDetails(3);
            }}
            className="influencer_container"
          >
            <img src="./people.png" />
            <p>DOLOR</p>
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
