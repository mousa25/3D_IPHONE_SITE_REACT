import React from "react";
import HoldingIphone from "../assets/images/iphone-hand.png";
import Iphone from "../assets/images/iphone-14.jpg";

function Jumbotron() {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro" />
      <p className="text">big and bigger</p>
      <span className="description">
        From $41.63/mo. for 24 mo .or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            learn more
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} />
    </div>
  );
}

export default Jumbotron;
