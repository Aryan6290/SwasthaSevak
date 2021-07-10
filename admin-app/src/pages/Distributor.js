import React from "react";
import ListComponent from "../components/Details/ListComponent";
import { hospitalData } from "../Data/hospitalData";

const Distributor = () => {
  return (
    <div className="distributor" style={{ width: "100%" }}>
      <ListComponent heading="Distributor Information" data={hospitalData} />
    </div>
  );
};

export default Distributor;
