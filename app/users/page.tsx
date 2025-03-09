import React from "react";
import ShowDate from "../components/ShowDate";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ShowDate />
      <p>Users:</p>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
