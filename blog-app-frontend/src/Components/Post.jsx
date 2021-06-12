import { Link } from "react-router-dom";
import { useContext } from "react";
import "../css/post.css";
import { Context } from "../context/Context";
import { useState, useEffect } from "react";
//import { useContext } from 'react';

export default function Post(props) {
  const {user} = useContext(Context);
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {props.post.photo && (
        <img className="postImg" src={PF + props.post.photo} alt="" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {props.post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        


        { user ? (
            <>
            <Link to={`/post/${props.post._id}`} className="link">
          <span className="postTitle">{props.post.title}</span>
        </Link>
              </>
          ) :
          <Link to={`/login`} className="link">
          <span className="postTitle">{props.post.title}</span>
        </Link>
}
        
        
        <hr />
        <span className="postDate">
          {new Date(props.post.createdAt).toDateString()}
        </span>

        <p className="postDesc">{props.post.desc}</p>
      </div>
    </div>
  );
}
