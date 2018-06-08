import React, { Component } from "react";
// import Starfield from "starfield.js";

class SpaceInavdersWrapper extends Component {
  componentDidMount() {
    var canvas = document.getElementById("gameCanvas");
    var container = document.getElementById("starfield");
    var Starfield = require("./starfield.js");
    var Game = require("./spaceInvadersGame.js");

    //  Create the starfield.
    // var starfield = new Starfield();
    // starfield.initialise(container);
    // starfield.start();
    //  Setup the canvas.
    canvas.width = 800;
    canvas.height = 600;
    //  Create the game.
    var game = new Game();
    //  Initialise it with the game canvas.
    game.initialise(canvas);
    //  Start the game.
    game.start();
    //  Listen for keyboard events.
    window.addEventListener("keydown", function keydown(e) {
      var keycode = e.which || window.event.keycode;
      //  Supress further processing of left/right/space (37/29/32)
      if (keycode == 37 || keycode == 39 || keycode == 32) {
        e.preventDefault();
      }
      game.keyDown(keycode);
    });
    window.addEventListener("keyup", function keydown(e) {
      var keycode = e.which || window.event.keycode;
      game.keyUp(keycode);
    });
    function toggleMute() {
      game.mute();
      document.getElementById("muteLink").innerText = game.sounds.mute
        ? "unmute"
        : "mute";
    }
    //here we put a non react component
  }

  render() {
    return (
      <div>
        <div id="gamecontainer">
          <canvas id="gameCanvas" />
        </div>
      </div>
    );
  }
}

export default SpaceInavdersWrapper;
