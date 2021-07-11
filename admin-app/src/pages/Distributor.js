import React, { useState, useEffect } from "react";
import ListComponent from "../components/Details/ListComponent";

const Distributor = ({ token }) => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("approved");

  useEffect(() => {
    let url = `https://swastha-sevak-backend.herokuapp.com/api/distributor?status=${option}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [option]);

  const optionChange = (e) => {
    setOption(e.target.value);

    console.log(e.target.value);
  };

  return (
    <div className="distributor" style={{ width: "100%" }}>
      <ListComponent
        heading="Distributor Information"
        data={data}
        category="distributor"
        token={token}
        optionChange={optionChange}
      />
    </div>
  );
};

export default Distributor;
