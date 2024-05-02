import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import "./navbar.scss";
import {Link} from "react-router-dom";

const Navbar = () => {

  const { logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={"/"}>
          <img src="/home.svg" alt="" />
        </Link>
        <span>Welcome</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
            <img
              src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
        <div onClick={() => logout()} style={{cursor: 'pointer'}}>
          <img src="/post.svg" alt="" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
