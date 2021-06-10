import React from 'react'
import { Link } from "react-router-dom";
import { Context } from '../context/Context';
import { useContext } from 'react';
import '../css/nav.css'



export default function Navbar() {
  //fake user
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
   
  };

  return (
    <div className="top">
      <div className="topLeft">
    

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            
            <Link className="link" to="/posts">
            HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">
            
            <Link className="link" to={`/posts/?user=${user}`}>
              My Posts
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
              <img className="topImg" src={PF + user.profileImg}alt=""/>
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
