import React from "react";
import "./Display.css";
import { useState } from "react";
import { useEffect } from "react";
import Users from "../Users/Users";

const Display = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="container">
      <div className="user-container">
        <h1>Number of Users: {users.length} </h1>
        {users.map((user) => (
          <Users key={user.cell} user={user}></Users>
        ))}
      </div>
      <div className="friend-request">
        <h4>Friend Request</h4>
      </div>
    </div>
  );
};

export default Display;
