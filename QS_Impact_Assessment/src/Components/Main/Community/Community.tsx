import "./Community.css";
import CommunityHead from "./CommunityHead/CommunityHead.jsx";
import CommunityCard from "./CommunityCard/CommunityCard.js";
const Community = () => {
  return (
    <>
      <div className="mainCommunityDiv">
        <CommunityHead />
        <br />
        <br />
        <CommunityCard />
      </div>
    </>
  );
};

export default Community;
