// not auther >> see post and add comment
//auther >> can delete update her/his post\\
import React, { useContext } from "react";
import "../../css/Onepost.css";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import "../../../src/App.css"

export default function Onepost() {
  const location = useLocation();
  const id = location.pathname.split("/")[2]; //to extract the postID out of the pathname
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const onePost = async () => {
      const res = await axios.get("http://localhost:5000/blog/v1/posts/" + id, {
        data: { username: user.username },
      });
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    onePost();
  }, [id]);
  const handleDelete = async () => {
    try {
      await axios.delete("http://localhost:5000/blog/v1/posts/" + id);
      //window.location.replace("/posts/");
      updateMode(false);
    } catch (err) {}
  };
  console.log(post);
  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5000/blog/v1/posts/" + id, {
        username: user.username,
        title,
        desc,
      });
      window.location.reload();
    } catch (err) {}
  };
  return (
    <div className="home">
      <Sidebar />
      <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img className="singlePostImg" src={PF + post.photo} alt="" />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlePostTitleInput"
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlePostTitle">
              {title}
              {post.username === user.username && (
                <div className="singlePostEdit">
                  <i
                    className="singlePostIcon far fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                  <i
                    className="singlePostIcon far fa-trash-alt"
                    onClick={handleDelete}
                  ></i>
                </div>
              )}
            </h1>
          )}

          <div className="singlePostInfo">
            <Link to={`/posts/?user=${post.username}`} className="link">
              <span className=""> {post.username}</span>
            </Link>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
          </div>
          {updateMode ? (
            <textarea
              className="singlePostDescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <p className="singlePostDesc">{desc}</p>
          )}

          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
