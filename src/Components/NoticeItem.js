import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Truncate from "react-truncate";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function NoticeItem({ id, title, content, tag }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <a href={`/notices/${id}`}>
          <ListItemText
            primary={title}
            secondary={
              <React.Fragment>
                {`${tag} — `}
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  <Truncate lines={1} ellipsis={<span>...</span>}>
                    {content}
                  </Truncate>
                </Typography>
              </React.Fragment>
            }
          />
        </a>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default NoticeItem;
