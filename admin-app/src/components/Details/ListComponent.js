import React from "react";
import "./ListComponent.css";
import swal from "sweetalert";

const ListComponent = ({ heading, data, category, token, optionChange }) => {
  const handleClick = (id) => {
    fetch(
      `https://swastha-sevak-backend.herokuapp.com/api/${category}/approval`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      }
    )
      .then((response) => response.json())
      .then((response) =>
        swal("Good job!", "Approved Successfully!!!", "success")
      )
      .catch((err) => swal("Try Again", "Not Approved", "warning"));
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
            <th>Address</th>
            <th>Contact Number</th>
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
                <td>{item.address}</td>
                <td>{item.phoneNum}</td>
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
