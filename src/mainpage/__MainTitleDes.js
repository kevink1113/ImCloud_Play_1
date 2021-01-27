import styled from "styled-components";

const TitleDes = styled.div`
  text-align: center;
  max-width: 700px;
`;

const MainTitleDes = ({ title, cont }) => {
  return (
    <TitleDes>
      <h2> {title}</h2>
      <div>{cont}</div>
    </TitleDes>
  );
};

export default MainTitleDes;
