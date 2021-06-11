import React from 'react'
import "../../css/newpost.css"
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from '../../context/Context';
import Sidebar from '../../Components/Sidebar';

export default function Newpost() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context)
  console.log(title);

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
      } catch (err) { }
    }
    try {
      const res = await axios.post("http://localhost:5000/blog/v1/posts/create", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { } 
  };

  return (

    <div className="home">
    
    <div className="new">
      
      {file && (
      <img className="blogImg" alt="" src={URL.createObjectURL(file)} />
      )}
      <div></div>
      <form action="" className="newForm" onSubmit={handleSubmit}>
        <div className="newPost">
          <label htmlFor="fileInput">
            <i className="fas fa-plus-circle writeIcon "></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])}/>
          <input type="text" placeholder="Title" className="titleStyle" autoFocus={true}  onChange={e=>setTitle(e.target.value)}/>
        </div>
        <form className="newForm">
          <textarea
            className="titleStyle writeText"
            placeholder="Tell the World...."
            type="text"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          />
        </form>
        <button className="btnSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
    <Sidebar />
    </div>
  )
}