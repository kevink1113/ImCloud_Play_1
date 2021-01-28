import React, { Component } from "react";
import styled from "styled-components";
import ProfilePhoto from "./components/ProfilePhoto";
import Title from "./components/Title";

const StyledView = styled.div`
  min-height: 100vh;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyleBackground = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  background-image: linear-gradient(to top, white, rgba(255, 255, 255, 0)),
    url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
  width: 100vw;
  height: 100vh;

  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Say = styled.p`
  font-weight: 400;
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

class StyleView extends Component {
  state = {
    opacity: 0,
    visibility: "hidden",
  };

  render() {
    return (
      <StyledView>
        <StyleBackground />
        <Title title="당신의 패션 스타일 (유형)은?" />
        <ViewContainer>
          <ProfilePhoto
            src="./people.png"
            influencer_id="sangwon_1113"
            size="medium"
          />
          <ViewText>
            <h4>강상원</h4>
            <h3>Urban Style</h3>
            <Say>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec acleo neque. Pellentesque sed"
            </Say>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec leo neque. Pellentesque sed est mattis, rhoncus
              elit eu,tortor quis interdum fermentum, magna leo pulvinar arcu,
              cursus rhoncus nulla turpis quis sem. Aenean lacinia efficitur ex,
              eget lobortis purus ven
            </p>
          </ViewText>
        </ViewContainer>
      </StyledView>
    );
  }
}

export default StyleView;
