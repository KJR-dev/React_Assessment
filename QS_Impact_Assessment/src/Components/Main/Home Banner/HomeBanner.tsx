import "./HomeBanner.css";
import "./HomeBanner.ts";

const HomeBanner = () => {
  return (
    <div className="wrapper">
      <header className="hero hero1" id="heroBanner">
        <div className="content">
          <h1 id="headline">Enjoy a hike.</h1>
          <p id="tagline">Navigate the wonders of the mountains.</p>
          <p id="description">Navigate the wonders of the mountains.</p>
          <div className="buttonDiv">
            <button>CONTRIBUTE</button>
          </div>
        </div>
        <div className="dots">
          <div className="dot activeDot" id="dot1"></div>
          <div className="dot" id="dot2"></div>
          <div className="dot" id="dot3"></div>
          <div className="dot" id="dot4"></div>
        </div>
      </header>
    </div>
  );
};

export default HomeBanner;
