import React, {Component} from 'react';
import './MainC.css';

class StartButton extends Component {
    render() {
        return(
           <div id = "startBt">
                <a href = "/result"> {this.props.start} </a>
           </div>
        );
    }
}

export default StartButton;