import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Utility from "./Utility.json";
import "../Styles/AdminMain.css";
import AdminMainRight from "./AdminMainRight";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      //   margin: theme.spacing(1),
      width: "100%",
    },
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function AdminMain() {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  return (
    <div className="adminMain">
      <div className={`${classes.root} adminMain__left`}>
        <Paper elevation={3} className={classes.list}>
          <List component="nav" aria-label="main mailbox folders">
            {Utility.adminpanel.map((item) => (
              <>
                <ListItem button>
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </Paper>
      </div>
      <div className={`${classes.root} adminMain__Right`}>
        <Paper elevation={3}>
          <AdminMainRight search={search} />
        </Paper>
      </div>
    </div>
  );
}

export default AdminMain;
