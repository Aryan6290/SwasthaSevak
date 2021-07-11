import React, { useState, useEffect } from "react";
import ListComponent from "../components/Details/ListComponent";

const Hospitals = ({ token }) => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("approved");

  const optionChange = (e) => {
    setOption(e.target.value);

    console.log(e.target.value);
  };
  useEffect(() => {
    fetch(
      `https://swastha-sevak-backend.herokuapp.com/api/hospital?status=${option}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  }, [option]);
  return (
    <div className="hospital" style={{ width: "100%" }}>
      <ListComponent
        heading="Hospital Information"
        data={data}
        token={token}
        category="hospital"
        optionChange={optionChange}
      />
    </div>
  );
};

export default Hospitals;
