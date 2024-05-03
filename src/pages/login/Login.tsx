import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="login-page">
      <form className="form">
        <h1>Login</h1>
        <input type="text" name="username"></input>
        <input type="password" name="password"></input>
        <button
          onClick={() => {
            login();
            navigate("/");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
