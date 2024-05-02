import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

import { useNavigate } from "react-router-dom"

const Login = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>

      username: <input type="text" name="username"></input>

      password: <input type="password" name="password"></input>
      <button onClick={() => { 
        login()
        navigate('/')
      }}>Login</button>
    </div>
  )
}

export default Login