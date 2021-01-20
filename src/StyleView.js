import "./StyleView.css";

function StyleView() {
  return (
    <div className="StyleView">
      <h1>당신의 패션 스타일 (유형)은?</h1>
      <div className="view_container">
        <img src="./people.png" className="photo"></img>
        <div className="view_text">
          <h4>강상원</h4>
          <h3>Urban Style</h3>
          <p>
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

export default StyleView;
