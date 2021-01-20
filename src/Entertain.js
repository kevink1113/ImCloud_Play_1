import "./StyleView.css";

function Entertain() {
  return (
    <div class="entertainBox">
      <h1 id="entertainTitle">인플루언서의 PICK</h1>
      <div class="flexBox">
        <div id="flexItem01">
          <a href="/">
            <img src="./book001.jpg" id="bookImage"></img>
          </a>

          <div id="flexItem01text">
            <div id="flexItemtitle">Book!</div>
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec leo neque. Pellentesque sed est mattis
          </div>
        </div>

        <div id="flexItem02">
          <a href="/">
            <img src="./music001.jpg" id="musicImage"></img>
          </a>

          <div id="flexItem02text">
            <div id="flexItemtitle">Music!</div>
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec leo neque. Pellentesque sed est mattis
          </div>
        </div>

        <div id="flexItem03">
          <a href="/">
            <img src="./movie001.jpg" id="movieImage"></img>
          </a>

          <div id="flexItem03text">
            <div id="flexItemtitle">Movie!</div>
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec leo neque. Pellentesque sed est mattis
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entertain;
