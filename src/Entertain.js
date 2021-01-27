import "./StyleView.css";

function Entertain() {
  return (
    <div className="entertainBox">
      <h1 id="entertainTitle">인플루언서의 PICK</h1>
      <div className="flexBox">
        <div className="flexItem">
          <a href="/">
            <img src="./book001.jpg" id="bookImage"></img>
          </a>

          <div className="flexItemText">
            <div id="flexItemtitle">Book!</div>
            <p>
              Lorem ipsum dolor sit amet, ctetur adipiscing elit. Pellentesque
              nec leo neque. Pellentesque sed est mattis
            </p>
          </div>
        </div>

        <div className="flexItem">
          <a href="/">
            <img src="./music001.jpg" id="musicImage"></img>
          </a>

          <div className="flexItemText">
            <div id="flexItemtitle">Music!</div>
            <p>
              Lorem ipsum dolor si amet, con adipiscing elit. Pellentesque nec
              leo neque. Pellentesque sed est mattis
            </p>
          </div>
        </div>

        <div className="flexItem">
          <a href="/">
            <img src="./movie001.jpg" id="movieImage"></img>
          </a>

          <div className="flexItemText">
            <div id="flexItemtitle">Movie!</div>
            <p>
              Lorem ipsum dolor si amet, con adipiscing elit. Pellentesque nec
              leo neque. Pellentesque sed est mattis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entertain;
