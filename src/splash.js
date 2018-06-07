import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ParticleContainer from "./ParticleContainer";

class Splash extends React.Component {
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
            {<ParticleContainer />}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Splash;
