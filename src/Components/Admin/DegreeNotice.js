import { Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import "./DegreeNotice.css";

function DegreeNotice() {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const degreeNotice = () => {
      db.collection("notices").onSnapshot((snapshot) => {
        setDisplay(snapshot.docs.map((doc) => doc.data()));
      });
    };
    degreeNotice();
  }, []);

  console.log(display);

  return (
    <div className="admin__degreeNotice">
      {display.map((item) => (
        <div className="admin__degree">
          <div className="admin__degreeLeft">
            <p>{item.title}</p>
            <p>{item.content}</p>
            <p>{item.tag}</p>
          </div>
          <div className="admin__degreeRight">
            <p>{item.title}</p>
            <p>{item.content}</p>
            <p>{item.tag}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DegreeNotice;
