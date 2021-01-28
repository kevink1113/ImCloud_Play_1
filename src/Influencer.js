import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import ProfilePhoto from "./components/ProfilePhoto";
import Title from "./components/Title";
import RadarCharts from "./components/RadarCharts";

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

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.2);
  transition: all 0.2s;
  z-index: 100000;

  opacity: 0;
  visibility: hidden;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 1000px) {
    img {
      margin-top: 40px;
    }
  }
`;

const StyledInfluencer = styled.div`
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const InfluencerContainer = styled.div`
  max-width: 220px;
  margin: 1rem;
  img {
    width: 220px;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.05);
  }
  p {
    width: inherit;
  }
`;

const InfluencerName = styled.p`
  font-weight: 500;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const DetailText = styled.div`
  max-width: 600px;
  margin: 1rem;
  background: none;
`;

const X = styled(GrClose)`
  position: fixed;
  top: 10px;
  right: 10px;
  pointer-events: none;
`;

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
      <StyledInfluencer>
        {/* 선택했을 때 나오는 불투명 배경 & 내용 */}
        <Background
          onClick={() => {
            this.setState({ opacity: 0, visibility: "hidden" });
            document.body.style.overflowY = "scroll";
          }}
          style={{
            opacity: this.state.opacity,
            visibility: this.state.visibility,
          }}
        >
          <X size={20} />
          <ProfilePhoto
            src="./people.png"
            influencer_id="sangwon_1113"
            size="medium"
          />

          <DetailText>
            <h3>Influencer {this.state.person}</h3>
            <p>
              Lorem Ipsum em. Aenean lacinia efficitur ex, eget lobortis purus
              venem. Aenean lacinia efficitur ex, eget lobortis purus ven em.
              Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven em. Aenean lacinia
              efficitur ex, eget lobortis purus venem. Aenean lacinia efficitur
              ex, eget lobortis purus ven
            </p>
            <RadarCharts captions={captions} data={data} size={300} />
          </DetailText>
        </Background>

        {/* 여기서부터 본 화면 */}
        <Title title="이런 인플루언서도 있어요..." />
        <ListContainer>
          <InfluencerContainer>
            <img
              onClick={() => {
                this.showDetails(1);
              }}
              src="./people.png"
            />
            <InfluencerName>LOREM</InfluencerName>
            <p>
              em. Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven
            </p>
          </InfluencerContainer>
          <InfluencerContainer>
            <img
              onClick={() => {
                this.showDetails(2);
              }}
              src="./people.png"
            />
            <InfluencerName>LOREM</InfluencerName>
            <p>
              em. Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven
            </p>
          </InfluencerContainer>
          <InfluencerContainer>
            <img
              onClick={() => {
                this.showDetails(3);
              }}
              src="./people.png"
            />
            <InfluencerName>LOREM</InfluencerName>
            <p>
              em. Aenean lacinia efficitur ex, eget lobortis purus venem. Aenean
              lacinia efficitur ex, eget lobortis purus ven
            </p>
          </InfluencerContainer>
        </ListContainer>
      </StyledInfluencer>
    );
  }
}

export default Influencer;
