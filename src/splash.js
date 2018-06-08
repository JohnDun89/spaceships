import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ParticleContainer from "./ParticleContainer";
import SpaceInvadersWrapper from "./spaceInvadersWrapper";
import IntroductionText from "./introductionText";
import introductionText from "./introductionText";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ship1: "https://image.ibb.co/kmjPQ8/pals_01.png",
      ship2: "https://image.ibb.co/b2pDJT/pals_03.png"
    };
  }

  render() {
    return (
      <div>
        <div onWheel={this.props.splashClicked}>
          <ReactCSSTransitionGroup
            transitionName="introduction"
            transitionAppear={true}
            transitionEnterTimeout={1500}
            transitionAppearTimeout={1500}
            transitionLeaveTimeout={1500}
          >
            <div id="splash-box">
              {<IntroductionText />}
              {<SpaceInvadersWrapper />}
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Splash;

// <ParticleContainer image1={this.state.ship1} image2={this.state.ship2} />;
