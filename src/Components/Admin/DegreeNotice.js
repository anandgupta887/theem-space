import { Divider, IconButton, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Truncate from "react-truncate";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import "./DegreeNotice.css";

function DegreeNotice({ search }) {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const degreeNotice = () => {
      if (search === "1") {
        db.collection("degreeNotice").onSnapshot((snapshot) => {
          setDisplay(snapshot.docs.map((doc) => doc.data()));
        });
      } else if (search === "5") {
        db.collection("notices").onSnapshot((snapshot) => {
          setDisplay(snapshot.docs.map((doc) => doc.data()));
        });
      }
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
            <Truncate lines={1} ellipsis={<span>...</span>}>
              {item.content}
            </Truncate>
            <p>{item.tag}</p>
          </div>
          <div className="admin__degreeRight">
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <IconButton>
              <UpdateIcon />
            </IconButton>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
}

export default DegreeNotice;
