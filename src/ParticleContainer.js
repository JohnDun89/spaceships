import React from "react";
import Particles from "react-particles-js";
// alien = {require("./images/alien01.png")}

import alien from "./images/alien01.png";
class ParticleContainer extends React.Component {
  render() {
    return (
      <Particles
        width="100%"
        height="100%"
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 868.0624057955
              }
            },
            color: {
              value: "#ecd018"
            },
            shape: {
              type: "image",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },

              image: {
                src: "https://image.ibb.co/nbBr3T/Untitled_4_01.png",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 15,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 5,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#e2d018",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: false
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 40,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
        style={{
          backgroundColor: "#FFF"
          // width: "100%",
          // height: "100%"
        }}
      />
    );
  }
}

export default ParticleContainer;