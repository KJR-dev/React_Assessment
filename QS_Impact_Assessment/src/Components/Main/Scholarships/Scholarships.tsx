import "./Scholarships.css";
import ScholarshipHead from "./ScholarshipHead/ScholarshipHead";
import ScholarshipCard from "./ScholarshipCard/ScholarshipCard";

const Scholarships = () => {
  return (
    <>
      <div className="mainScholarshipDiv">
        <ScholarshipHead />
        <br />
        <br />
        <ScholarshipCard />
      </div>
    </>
  );
};

export default Scholarships;
