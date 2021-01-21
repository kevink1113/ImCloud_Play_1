import React from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import "./StatChart.css";

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

class StyleStat extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <div className="StyleStat">
        {/*<div className="Chart">
                    <StyleChart />
                </div>*/}

        <h1>스타일 유형에 대한 설명</h1>
        <div className="view_container">
          <div className="view_text">
            <h3>스타일 유형</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec leo neque. Pellentesque sed"
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec leo neque. Pellentesque sed est mattis, rhoncus
              elit eu,tortor quis interdum fermentum, magna leo pulvinar arcu,
              cursus rhoncus nulla turpis quis sem. Aenean lacinia efficitur ex,
              eget lobortis purus ven
            </p>
          </div>
          <div className="Chart">
            <RadarChart
              captions={captions}
              data={data}
              size={350}
              dots={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StyleStat;
