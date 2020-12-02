import React, { useEffect, useState } from "react";
import "./Query.css";
import { db } from "../firebase";
import { Divider } from "@material-ui/core";
import { timeConverter } from "../Utility";

function Query() {
  const [query, setQuery] = useState([]);

  useEffect(() => {
    db.collection("queries")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setQuery(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="query">
      {query.map((item) => (
        <div className="query__item">
          <div className="query__detail">
            <span>Name: {item.name}</span>
            <span>At: {timeConverter(item.timeStamp)}</span>
          </div>
          <br />
          <div className="query__detail">
            <span>Mobile No : {item.number}</span>
            <span>Email ID : {item.email}</span>
          </div>
          <div className="query__message">
            <p>Message: {item.message}</p>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
}

export default Query;
