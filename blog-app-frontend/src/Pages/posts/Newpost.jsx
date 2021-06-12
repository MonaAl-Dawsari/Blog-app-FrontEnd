import React from "react";
import "../../css/newpost.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import Sidebar from "../../Components/Sidebar";

export default function Newpost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/blog/v1/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/blog/v1/posts/create",
        newPost
      );
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="home">
      <div className="new">
        <h2 className="alert alert-danger text-center ">
          Add Post Now{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
          </svg>
        </h2>
        {file && (
          <img className="blogImg" alt="" src={URL.createObjectURL(file)} />
        )}
        <div></div>
        <form action="" className="newForm" onSubmit={handleSubmit}>
          <div className="newPost">
            <label htmlFor="fileInput">
              <i className="fas fa-plus-circle writeIcon "></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              className="titleStyle"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <form className="newForm">
            <textarea
              className="titleStyle writeText"
              placeholder="Tell the World...."
              type="text"
              autoFocus={true}
              onChange={(e) => setDesc(e.target.value)}
            />
          </form>
          <button className="btnSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
