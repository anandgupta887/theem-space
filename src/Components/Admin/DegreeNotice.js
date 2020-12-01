import { Divider, IconButton, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Truncate from "react-truncate";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import Modal from "@material-ui/core/Modal";
import "./DegreeNotice.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

function DegreeNotice({ search }) {
  const classes = useStyles();
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const degreeNotice = () => {
      if (search === "1") {
        db.collection("degreeNotice").onSnapshot((snapshot) => {
          setDisplay(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      } else if (search === "5") {
        db.collection("notices").onSnapshot((snapshot) => {
          setDisplay(snapshot.docs.map((doc) => doc.data()));
        });
      }
    };
    degreeNotice();
  }, []);

  const handleDelete = (id) => {
    db.collection("degreeNotice")
      .doc(id)
      .delete()
      .then(() => console.log("successfully deleted! "))
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    console.log("update");
  };

  const addNewNotice = () => {
    console.log("click");
  };

  return (
    <div className="admin__degreeNotice">
      {display.map((item) => (
        <>
          <div className="admin__degree" key={item.id}>
            <div className="admin__degreeLeft">
              <h3>{item.data.title}</h3>
              <Truncate lines={1} ellipsis={<span>...</span>}>
                {item.data.content}
              </Truncate>
              <p>{item.data.tag}</p>
            </div>
            <div className="admin__degreeRight">
              <div className="admin__degreeButton">
                <IconButton>
                  <DeleteIcon onClick={() => handleDelete(item.id)} />
                </IconButton>
                <IconButton>
                  <UpdateIcon onClick={handleUpdate} />
                </IconButton>
              </div>
            </div>
          </div>
          <Divider light />
        </>
      ))}
      <div className={`${classes.root} admin__addNotice`}>
        <Fab color="primary" aria-label="add" onClick={addNewNotice}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default DegreeNotice;
