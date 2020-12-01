import "../Styles/Notices.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import NoticeItem from "./NoticeItem";
import { Link } from "@material-ui/core";

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
  const [degree, setDegree] = useState([]);

  useEffect(() => {
    db.collection("notices").onSnapshot((snapshot) => {
      setNotices(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  useEffect(() => {
    db.collection("degreeNotice")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setDegree(
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
          {degree.map((item) => (
            <NoticeItem
              key={item.id}
              course="degree"
              id={item.id}
              title={item.data.title}
              content={item.data.content}
              tag={item.data.tag}
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
              id={notice.id}
              course="diploma"
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
