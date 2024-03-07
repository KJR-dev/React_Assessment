import "./ListOpportunity.css";
const ListOpportunity = () => {
  return (
    <>
      <div className="innerDiv">
        <p>
          Knowing & caring about issues in your community is the first step.
          Take the next step and create impACT today.
        </p>
        <div className="iconDiv">
          <div className="icon">
            <img src="image/icon1.svg" className="icon1" />
          </div>
          <hr className="hr" />
          <div className="icon icon2">
            <img src="image/icon2.svg" className="icon2" />
          </div>
          <hr className="hr" />
          <div className="icon icon3">
            <img src="image/icon3.svg" className="icon3" />
          </div>
        </div>
        <button>CREATE AN IMPACT</button>
      </div>
    </>
  );
};

export default ListOpportunity;
