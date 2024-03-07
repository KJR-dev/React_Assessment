import "./Opportunity.css";
import "./ListOpportunity/ListOpportunity.tsx";
import ListOpportunity from "./ListOpportunity/ListOpportunity.tsx";

const Opportunity = () => {
  return (
    <>
      <div className="oppHeaderDiv">
        <div>
          <h1>Lorem ipsum dolor sit.</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            at reiciendis, ab quo quasi ut exercitationem ipsam eligendi odit
            obcaecati eveniet.
          </p>
        </div>
        <img src="image/img6.svg" className="image" />
      </div>

      <div className="oppDiv">
        <ListOpportunity />
        <ListOpportunity />
      </div>
    </>
  );
};

export default Opportunity;
