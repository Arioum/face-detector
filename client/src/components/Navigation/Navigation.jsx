import React from "react";
import "./nav.style.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav>
      <p>Face DetectiFY</p>
      {isSignedIn ? (
        <button className="btn-style-1" onClick={() => onRouteChange("signout")}>Sign Out</button>
      ) : (
        <div className="btn-container">
          <button className="btn-style-1" onClick={() => onRouteChange("register")}>Register</button>
          <button className="btn-style-1" onClick={() => onRouteChange("signin")}>Sign in</button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
