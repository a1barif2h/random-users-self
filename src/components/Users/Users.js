import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Users.css";

const Users = (props) => {
  console.log(props.user);
  const { gender, cell, email, phone } = props.user;
  const { title, first, last } = props.user.name;
  const { date, age } = props.user.dob;
  const { city, country, state } = props.user.location;
  return (
    <div>
      <div className="users">
        <div className="user-img">
          <img src={props.user.picture.large} alt="" />
          <div>
            <button>
              <FontAwesomeIcon icon={faUser} />
              Add Friend
            </button>
          </div>
        </div>
        <div className="user-detail">
          <h3>{title + " " + first + " " + last}</h3>
          <p> Gender: {gender} </p>

          <p>Email No: {email} </p>
          <p>Date of birth: {date} </p>
          <p>Age: {age} years </p>
          <p>Salary: ${age * 50}</p>
        </div>
        <div className="user-address">
          <h4>Personal address:</h4>
          <p>country: {country} </p>
          <p>City: {city} </p>
          <p>State: {state} </p>
          <p>Cell No: {cell} </p>
          <p>Phone No: {phone} </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
