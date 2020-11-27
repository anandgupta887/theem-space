import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import "../Styles/Notice.css";

function Notice() {
  const [notice, setNotice] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    db.collection("notices")
      .doc(id)
      .onSnapshot((snapshot) => {
        setNotice(snapshot.data());
      });
  }, []);

  return (
    <div className="notice">
      <div className="notice__header">
        <h2>{notice.title}</h2>
      </div>
      <div className="notice__content">
        <span>{notice.content}</span>
      </div>
      <div className="notice__attachment">
        <span>{notice.attachment}</span>
      </div>
    </div>
  );
}

export default Notice;
