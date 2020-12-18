import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Utility from "./Utility.json";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../Styles/Notes.css";
import { useState } from "react";
import { NoteAdd } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import { Backdrop, Fade, Input, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      //   margin: theme.spacing(1),
      width: "100%",
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
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  cardroot: {
    maxWidth: 285,
  },
  media: {
    height: 120,
  },
  noteroot: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Notes() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const [notes, setNotes] = useState([
    {
      name: "Sem 1 Study Material",
      url:
        "https://drive.google.com/drive/folders/1ijFioQtdkpXgAt0o_g_oe6o132DEcKav?usp=sharing",
    },
    {
      name: "Sem 3 Study Material",
      url:
        "https://drive.google.com/drive/folders/1ijFioQtdkpXgAt0o_g_oe6o132DEcKav?usp=sharing",
    },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notesUpload = (e) => {
    console.log(e);
    e.preventDefault();
    setNotes([
      ...notes,
      {
        name: name,
      },
    ]);
    setOpen(false);
  };

  return (
    <div className="notes">
      <div className={`${classes.root} notes__left`}>
        <Paper elevation={3} className={classes.list}>
          <List component="nav" aria-label="main mailbox folders">
            {Utility.notes.map((item) => (
              <>
                <ListItem button>
                  <ListItemIcon>
                    <NoteAdd />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Paper>
      </div>
      <div className={`${classes.root} notes__Right`}>
        <Paper elevation={3} className="notes__RightItem">
          {notes.map((note) => (
            <Card className={`${classes.cardroot} notes__RightCard`}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {note.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={note.url}>
                  Download
                </Button>
              </CardActions>
            </Card>
          ))}

          <div className={`${classes.noteroot} noteUpload`}>
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
              <NoteAdd />
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
                    <h1>Add Notes</h1>
                  </div>
                  <form>
                    <div className="addNotice__inputs">
                      <Input
                        placeholder="Enter title"
                        className="addNotice__title"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
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
                      <button className="addNotice__post" onClick={notesUpload}>
                        Post
                      </button>
                    </div>
                  </form>
                </div>
              </Fade>
            </Modal>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Notes;
