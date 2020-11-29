import DegreeNotice from "./Admin/DegreeNotice";
import Query from "./Admin/Query";
import "../Styles/AdminMainRight.css";

function AdminMainRight({ search }) {
  if (search === "1" || search === "5") {
    return <DegreeNotice />;
  } else if (search === "9") {
    return <Query />;
  } else {
    return <div>nothing</div>;
  }
}

export default AdminMainRight;
