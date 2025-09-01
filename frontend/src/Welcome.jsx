import React from "react";
import "./WelcomePage.css";
import backgroundImage from "./assets/wall2.jpg";
import logo from "./assets/logo.webp";

const WelcomePage = () => {
  return (
    <div
      className="welcome-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="welcome-overlay">
        <h1>W E L C O M E !</h1>
        <p className="sub">We’re thrilled to have you here! Enjoy our platform and dive into coding, experiment without fear, and let your creativity flow. Happy Debugging!! Remember, every bug you solve is a step toward mastery, and every line of code you write brings you closer to becoming a better developer. Enjoy learning, building, and growing along the way!</p>
        <p className="click" >• Click anywhere to continue</p>
      </div>

      <div className="logo-container">
        <img src={logo} alt="logo" />
        <p>BugByte - Designed by Sam</p>
      </div>
    </div>
  );
};

export default WelcomePage;
