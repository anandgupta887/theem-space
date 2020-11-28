import { useEffect, useState } from "react";
import Utility from "./Utility.json";
import "../Styles/Login.css";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [{ loggedInUser, isadmin }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        if (authUser.email === Utility.user) {
          setAdmin(true);
          dispatch({
            type: "update admin user",
            item: authUser,
            isadmin: admin,
          });
        } else {
          setAdmin(false);
          dispatch({
            type: "update user",
            item: authUser,
          });
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [admin]);

  const handleLogin = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <div className="main">
      <p className="sign" align="center">
        Admin Sign In
      </p>
      <form className="form1">
        <input
          className="un "
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          align="center"
          placeholder="Enter your Email..."
          value={email}
        />
        <input
          className="pass"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          align="center"
          placeholder="Enter your password..."
          value={password}
        />
        <button
          className="submit"
          onClick={handleLogin}
          type="submit"
          align="center"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
