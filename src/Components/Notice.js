import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { db } from "./firebase";
import "../Styles/Notice.css";

function Notice() {
  const [notice, setNotice] = useState([]);
  const [attach, setAttach] = useState([]);

  const { course, id } = useParams();

  useEffect(() => {
    if (course === "degree") {
      db.collection("degreeNotice")
        .doc(id)
        .onSnapshot((snapshot) => {
          setNotice(snapshot.data());
          setAttach(snapshot.data().attachment);
        });
    } else {
      db.collection("notices")
        .doc(id)
        .onSnapshot((snapshot) => {
          setNotice(snapshot.data());
          setAttach(snapshot.data().attachment);
        });
    }
  }, []);

  console.log(notice);

  return (
    <div className="notice">
      <div className="notice__header">
        <h2>{notice.title}</h2>
      </div>
      <div className="notice__content">
        <span>{notice.content}</span>
      </div>
      {notice.url && (
        <div className="notice__url">
          <div className="notice__urlHeading">
            <p>Reference</p>
            <p className="notice__ref">
              <a href={notice.url}>Click Here</a>
            </p>
          </div>
        </div>
      )}
      {/* <div className="notice__tags">
        <p>
          For — <span>{notice.tag}</span>
        </p>
      </div> */}
      {attach && (
        <div className="notice__attachment">
          <div className="notice__attachLeft">
            <p>Attachments</p>
          </div>
          <div className="notice__attachRight">
            {attach.map(({ fileName, url }) => (
              <div className="notice__attachItem">
                <a href={url}>
                  <FileCopyIcon className="notice__attachIcon" />
                  <p>{fileName}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notice;
