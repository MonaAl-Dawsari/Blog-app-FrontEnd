//Update Account
//Change Password
//Profile picture

import "../../css/profile.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
    //   password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profileImg = filename;
      try {
        await axios.post("http://localhost:5000/blog/v1/upload/", data);
      } catch (err) {}
    }
    try {
        const res = await axios.put("http://localhost:5000/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileUpdateTitle">Update Your Account</span>
           </div>
        <form className="profileForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="profilePP">
            <img
            // src={user.profile.pic}
              src={file ? URL.createObjectURL(file) : PF + user.profileImg}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profilePPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
         <Link to="/changePassword">Change Password </Link>
           <button className="profileSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
     
    </div>
  );
}
