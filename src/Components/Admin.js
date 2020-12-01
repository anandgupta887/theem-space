import { useEffect, useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import AdminPanel from "./AdminPanel";

function Admin() {
  const [{ loggedInUser, isadmin }, dispatch] = useStateValue();

  if (loggedInUser) {
    if (isadmin) {
      return <AdminPanel />;
    } else {
      return <Login />;
    }
  }
}

export default Admin;
