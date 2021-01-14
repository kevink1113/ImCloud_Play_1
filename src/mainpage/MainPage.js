import './MainC.css';
import React, {Component} from 'react';
import MainPage2 from "./MainPage2";
import StartButton from "./StartButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainTitle : 'Lorem ipsum dolor sit amet',
      mainContents : ' consectetur adipiscing elitPellentesque nec leo neque. Pellentesque sed est mattis, rhoncus elit eu',
      startB : '시작'
    }
  }

  render() { 
    return (
      <div>       
        <MainPage2 title={this.state.mainTitle} cont={this.state.mainContents} />
        <StartButton start = {this.state.startB}></StartButton>
      </div>
    );
  }
}

export default App;