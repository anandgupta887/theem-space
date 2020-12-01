import React, { useEffect, useState } from "react";
import { db } from "../firebase";

function Query() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    db.collection("queries")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setQuery(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  console.log(query);

  return <div>I m query</div>;
}

export default Query;
