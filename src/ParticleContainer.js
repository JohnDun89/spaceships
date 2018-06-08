import React from "react";
import Particles from "react-particles-js";

class ParticleContainer extends React.Component {
  render() {
    const image1 = this.props.image;
    const image2 = this.props.image;

    return (
      <div className="particles-div">
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
                type: "images",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                },

                image: {
                  src: "https://image.ibb.co/kmjPQ8/pals_01.png",
                  width: 100,
                  height: 100
                },
                image2: {
                  src: "https://image.ibb.co/b2pDJT/pals_03.png",
                  width: 100,
                  height: 100
                },
                images: [
                  {
                    src: "https://image.ibb.co/kmjPQ8/pals_01.png",
                    width: 100,
                    height: 100
                  },
                  {
                    src: "https://image.ibb.co/b2pDJT/pals_03.png",
                    width: 100,
                    height: 100
                  }
                ]
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
                opacity: 1,
                width: 1
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
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
                  duration: 30
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
      </div>
    );
  }
}

export default ParticleContainer;
