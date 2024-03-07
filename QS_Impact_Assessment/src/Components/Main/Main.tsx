import HomeBanner from "./Home Banner/HomeBanner.tsx";
import "./Main.css";
import Opportunity from "./Opportunity/Opportunity.tsx";
import Scholarships from "./Scholarships/Scholarships.tsx";
import Community from "./Community/Community.tsx";

function Body() {
  return (
    <>
      <div className="mainDiv">
        <HomeBanner />
        <div style={{ height: "4rem" }}></div>
        <Opportunity />
        <Scholarships />
        <Community />
      </div>
    </>
  );
}
export default Body;
