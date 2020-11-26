import "../Styles/Notices.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import NoticeItem from "./NoticeItem";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginLeft: "3rem",
    marginRight: "3rem",
    border: "1px solid black",
  },
});

function Notices() {
  const classes = useStyles();
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    db.collection("notices").onSnapshot((snapshot) => {
      setNotices(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  return (
    <div className="notices">
      <div className={`${classes.root} notices__left`}>
        <div className="notices__header">
          <span>Degree Notices</span>
        </div>
        <div className="notices__items">
          {notices.map((notice) => (
            <NoticeItem
              key={notice.id}
              title={notice.data.title}
              content={notice.data.content}
              tag={notice.data.tag}
            />
          ))}
        </div>
      </div>
      <div className={`${classes.root} notices__right`}>
        <div className="notices__header">Diploma Notices</div>
        <div className="notices__items">
          {notices.map((notice) => (
            <NoticeItem
              key={notice.id}
              title={notice.data.title}
              content={notice.data.content}
              tag={notice.data.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notices;
