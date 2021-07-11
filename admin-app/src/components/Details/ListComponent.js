import React from "react";
import "./ListComponent.css";

const ListComponent = ({ heading, data, category, token, optionChange }) => {
  const handleClick = (id) => {
    let jsonString = {};
    if (category === "hospital") {
      jsonString = { hospitalId: id };
    } else if (category === "distributor") {
      jsonString = { distributorId: id };
    }
    fetch(
      `https://swastha-sevak-backend.herokuapp.com/api/${category}/approval`,
      {
        method: "PUT",
        headers: {
          // Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonString),
      }
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
  };
  return (
    <div className="listContainer">
      <div className="listHeader">
        <h1>{heading}</h1>
        <div className="statusContainer">
          <p style={{ color: "#a3a3a3", fontWeight: "bold" }}>Sort By</p>
          <label htmlFor="status">Status - </label>

          <select name="status" id="status" onChange={optionChange}>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Approve</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? "tr-light" : "tr-blue"}
              >
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                {item.status === "pending" ? (
                  <td>
                    <button onClick={() => handleClick(item._id)}>
                      Approve
                    </button>
                  </td>
                ) : (
                  <td>Already Approved</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListComponent;
