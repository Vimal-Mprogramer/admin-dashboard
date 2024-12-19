import React, { useState } from "react";
import "./Datatable.scss";

const DataTable = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const users = [
    {
      id: 1,
      name: "Alexa Keith",
      email: "alexa@example.com",
      status: "active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "inactive",
    },
    { id: 3, name: "Sam Brown", email: "sam@example.com", status: "active" },
    {
      id: 4,
      name: "Chris thomas",
      email: "christhomas@example.com",
      status: "active",
    },
    {
      id: 5,
      name: "Oliveir Gerrard",
      email: "oliveir@example.com",
      status: "Inactive",
    },
  ];

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedUsers = [...users].sort((a, b) => {
    const result = a.name.localeCompare(b.name);
    return sortOrder === "asc" ? result : -result;
  });

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>
            Name <button onClick={handleSort}>Sort</button>
          </th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
