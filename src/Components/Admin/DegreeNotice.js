import { Divider, IconButton, Input, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Truncate from "react-truncate";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./DegreeNotice.css";
import { Label } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function DegreeNotice({ search }) {
  const classes = useStyles();
  const [display, setDisplay] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleDelete = (id, data) => {
    setDeleted(data);
    db.collection("degreeNotice")
      .doc(id)
      .delete()
      .then(() => console.log("successfully deleted! "))
      .catch((err) => console.log(err));
    db.collection("deletedDegreeNotice")
      .add(deleted)
      .then(() => console.log("successfully deleted! "))
      .catch((err) => console.log(err));
    setDeleted([]);
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
                  <DeleteIcon
                    onClick={() => handleDelete(item.id, item.data)}
                  />
                </IconButton>
              </div>
            </div>
          </div>
          <Divider light />
        </>
      ))}
      <div className={`${classes.root} admin__addNotice`}>
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={`${classes.paper} addNotice `}>
              <div className="addNotice__heading">
                <h1>Add Notice</h1>
              </div>
              <div className="addNotice__inputs">
                <Input placeholder="Enter title" className="addNotice__title" />
                <Input
                  placeholder="Enter tag (E.g KT Student, Comp dept)"
                  className="addNotice__title"
                />
                <Input
                  placeholder="Enter Content Here..."
                  className="addNotice__title"
                />
                <Input
                  placeholder="Enter Reference URL (if exists)"
                  className="addNotice__title"
                />
              </div>
              <div className="addNotice__upload">
                <input type="file" id="upload" hidden />
                <label for="upload">Choose file</label>
                <br />
                <button className="addNotice__post">Post</button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default DegreeNotice;
