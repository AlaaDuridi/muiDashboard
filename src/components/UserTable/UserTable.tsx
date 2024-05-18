import React, { useEffect, useState } from "react";
import DataTable from "../common/DataTable/DataTable";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "email", headerName: "Email" },
  { field: "phone", headerName: "Phone" },
  { field: "website", headerName: "Website" },
  { field: "street", headerName: "Street" },
];

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const transformedUsers = json.map((user) => ({
          ...user,
          street: user.address.street,
        }));
        setUsers(transformedUsers);
      });
  }, []);
  return <DataTable rows={users} columns={columns} />;
};

export default UserTable;
