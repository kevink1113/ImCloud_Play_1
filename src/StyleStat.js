import React from "react";
import RadarChart from "react-svg-radar-chart";
import styled, { keyframes } from "styled-components";
import "react-svg-radar-chart/build/css/index.css";

const StyledStat = styled.div`
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const ViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;
  align-items: center;
  align-content: center;
`;

const ViewText = styled.div`
  width: 400px;
  margin: 2rem;
  margin-left: 4rem;
  @media (max-width: 876px) {
    margin-left: 2rem;
  }
`;

const dash = keyframes`
  from {
    stroke-opacity: 0.3;
  }
  to {
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
`;

const filling = keyframes`
  from {
    fill-opacity: 0;
  }
  to {
    fill-opacity: 0.3;
  }
`;

const Chart = styled.div`
  .caption {
    font-size: 0.8rem;
    text-shadow: none;
  }

  .shape:hover {
    fill-opacity: 1;
  }

  path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 4s linear forwards, ${filling} 4s ease-in forwards;
  }
`;

let data0 = [
  {
    data: {
      battery: 0,
      design: 0,
      useful: 0,
      speed: 0,
      weight: 0,
      hello: 0,
      hallo: 0,
      hbello: 0,
      hcello: 0,
      hdello: 0,
    },
    meta: { color: "blue" },
  },
  {
    data: {
      battery: 0,
      design: 0,
      useful: 0,
      speed: 0,
      weight: 0,
      hello: 0,
      hallo: 0,
      hbello: 0,
      hcello: 0,
      hdello: 0,
    },
    meta: { color: "red" },
  },
];

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
      <StyledStat>
        <h1>스타일 유형에 대한 설명</h1>
        <ViewContainer>
          <ViewText>
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
          </ViewText>

          <Chart>
            <RadarChart
              captions={captions}
              data={data}
              size={300}
              dots={true}
            />
          </Chart>
        </ViewContainer>
      </StyledStat>
    );
  }
}

export default StyleStat;
