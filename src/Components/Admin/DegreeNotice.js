import { Divider, IconButton, Input, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Truncate from "react-truncate";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import firebase from "firebase";
import "./DegreeNotice.css";

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
  const [deleted, setDeleted] = useState({});
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [ref, setRef] = useState("");
  const [attach, setAttach] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const degreeNotice = () => {
      if (search === "1") {
        db.collection("degreeNotice")
          .orderBy("timeStamp", "desc")
          .onSnapshot((snapshot) => {
            setDisplay(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          });
      } else if (search === "5") {
        db.collection("notices").onSnapshot((snapshot) => {
          setDisplay(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          );
        });
      }
    };
    degreeNotice();
  }, [search]);

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

  const addNewNotice = (e) => {
    e.preventDefault();
    db.collection("degreeNotice")
      .add({
        By: "admin",
        title: title,
        content: content,
        url: ref,
        attachment: attach,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => alert("added successfully"))
      .catch((err) => alert(err.message));
    setTitle("");
    setTag("");
    setContent("");
    setAttach([]);
    setRef("");
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
              <form>
                <div className="addNotice__inputs">
                  <Input
                    placeholder="Enter title"
                    className="addNotice__title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                  />
                  <Input
                    placeholder="Enter tag (E.g KT Student, Comp dept)"
                    className="addNotice__title"
                    onChange={(e) => setTag(e.target.value)}
                    value={tag}
                    required
                  />
                  <Input
                    placeholder="Enter Content Here..."
                    className="addNotice__title"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    required
                  />
                  <Input
                    placeholder="Enter Reference URL (if exists)"
                    className="addNotice__title"
                    onChange={(e) => setRef(e.target.value)}
                    value={ref}
                  />
                </div>
                <div className="addNotice__upload">
                  <input
                    type="file"
                    id="upload"
                    hidden
                    onChange={(e) => {
                      console.log(e.target.files);
                    }}
                  />
                  <label for="upload">Choose file</label>
                  <br />
                  <button onClick={addNewNotice} className="addNotice__post">
                    Post
                  </button>
                </div>
              </form>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

export default DegreeNotice;
