import React, { useState, useEffect } from "react";
import ListComponent from "../components/Details/ListComponent";
// import { hospitalData } from "../Data/hospitalData";

const Distributor = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://swastha-sevak-backend.herokuapp.com/api/distributor?status=pending"
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  return (
    <div className="distributor" style={{ width: "100%" }}>
      <ListComponent
        heading="Distributor Information"
        data={data}
        category="distributor"
      />
    </div>
  );
};

export default Distributor;
