import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";
import Logo from "../img/LOGO.png";
import "../css/nav.css";

export default function Navbar() {
  //fake user
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon">
          <img src={Logo} alt="" />
        </i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/About">
              ABOUT
            </Link>
          </li>

          {user ? (
            <>
              <li className="topListItem">
                {/**to={`/posts/?user=${user.username}`} */}
                <Link className="link" to={`/?user=${user.username}`}>
                  MY POSTS
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/addPost">
                  NEW POST
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/profile">
            <img className="topImg " src={PF + user.profileImg} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="btn btn-dark" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="btn btn-dark" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}