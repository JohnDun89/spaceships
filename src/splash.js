import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ParticleContainer from "./ParticleContainer";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ship1: "https://image.ibb.co/byEe8T/ships_02.png",
      ship2: "https://image.ibb.co/byEe8T/ships_02.png"
    };
  }
  render() {
    return (
      <div id="splash-box" onWheel={this.props.splashClicked}>
        <div id="splash-text-container">
          <ReactCSSTransitionGroup
            transitionName="introduction"
            transitionAppear={true}
            transitionEnterTimeout={1500}
            transitionAppearTimeout={1500}
            transitionLeaveTimeout={1500}
          >
            {<ParticleContainer image={this.state.ship1} />}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Splash;
