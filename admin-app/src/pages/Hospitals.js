import React, { useState, useEffect } from "react";
import ListComponent from "../components/Details/ListComponent";

const Hospitals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://swastha-sevak-backend.herokuapp.com/api/hospital?status=pending"
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, []);
  return (
    <div className="hospital" style={{ width: "100%" }}>
      <ListComponent
        heading="Hospital Information"
        data={data}
        category="hospital"
      />
    </div>
  );
};

export default Hospitals;
