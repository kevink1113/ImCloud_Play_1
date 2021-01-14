import React, { Component } from 'react';
import './MainC.css';

class MainPage2 extends Component {
    render() {
        return(
            <div id = "mainPage_background">
                <h2 id ="mainPage_title"> {this.props.title} </h2> <br/>
                <div id = "mainPage_cont">{this.props.cont}</div>
            </div>
        );
    }
}

export default MainPage2;