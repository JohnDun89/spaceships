import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import ParticleContainer from "./ParticleContainer";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6
import Splash from "./splash.js";

class Opening extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMainContent: false
    };
  }
  renderContent() {
    const splash = [1].map(number => (
      <div key={number.toString()}>
        <Splash
          splashClicked={this.toggleContent}
          introText={this.state.introText}
        />
      </div>
    ));

    if (this.state.displayMainContent === true) {
      return (
        <ReactCSSTransitionGroup
          transitionEnter={true}
          transitionName="introduction"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionLeaveTimeout={1500}
          transitionEnterTimeout={1500}
        >
          <div />
        </ReactCSSTransitionGroup>
      );
    } else {
      return <div>{splash}</div>;
    }
  }

  toggleContent() {
    this.setState({ displayMainContent: true });
  }

  render() {
    return (
      <div id="opening">
        <Splash />
      </div>
    );
  }
}

export default Opening;
