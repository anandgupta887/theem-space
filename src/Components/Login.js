import "../Styles/Login.css";
import { auth } from "./firebase";

function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
        <input
          className="un "
          type="text"
          align="center"
          placeholder="Enter your Email..."
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Enter your password..."
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
