import React from "react";
import ListComponent from "../components/Details/ListComponent";
import { hospitalData } from "../Data/hospitalData";

const Hospitals = () => {
  return (
    <div className="hospital" style={{ width: "100%" }}>
      <ListComponent heading="Hospital Information" data={hospitalData} />
    </div>
  );
};

export default Hospitals;
