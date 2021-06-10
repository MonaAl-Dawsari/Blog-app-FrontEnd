import React from 'react'
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
import { useContext } from 'react';
import '../css/nav.css'



export default function Navbar() {
  //fake user
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">
            <Link className="link" to="/posts">
              ALL POST
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/addPost">
              NEW POST
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
            <Link to="/profile">
              <img className="topImg" src={user.profileImg}alt=""/>
            </Link>
          
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
              </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
              </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
      </div>
      </div>
  );
}
