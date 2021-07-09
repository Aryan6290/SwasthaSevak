import React from "react";
import ListComponent from "../components/Details/ListComponent";
import { hospitalData } from "../Data/hospitalData";

const PendingRequests = () => {
  return (
    <div className="hospital" style={{ width: "100%" }}>
      <ListComponent heading="Pending Requests" data={hospitalData} />
    </div>
  );
};

export default PendingRequests;
