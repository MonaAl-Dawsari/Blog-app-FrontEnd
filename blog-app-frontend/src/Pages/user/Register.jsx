import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/register.css";
import Alert from "@material-ui/lab/Alert";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // const [flag, setFlag] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setError(false);
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        username,
        email,
        password,
      });
      setError(true); //added
      setMessage(res.data.message);
      setSuccess(true);
      console.log(res);
      setTimeout(() => history.push("/login"), 2000);
      // res.data && window.location.replace("/login");
    } catch (err) {
      setMessage("Username, Email and Password are required fields");
      console.log(err.response);
      setError(true); //if we don't have any error and we have data from the use, which means the user successfully registered, he will be directed to login page
      setSuccess(false);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      {error &&
        (success ? (
          <Alert severity="success">{message}</Alert>
        ) : (
          <Alert severity="error">{message}</Alert>
        ))}

      <div className="register">
        <div className="register-card">
          <span className="registerTitle">
            R<span>eg</span>ist<span>e</span>r
          </span>
          <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              className="registerInput"
              placeholder="Enter your username..."
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              className="registerInput"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              className="registerInput"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              className="registerInput"
              placeholder="Enter your password..."
            />
            <button className="registerButton" type="submit">
              Register
            </button>
          </form>
          <button className="registerLoginButton">
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
          {/* {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>} */}
          {/* if there is an error show something went wrong */}
        </div>
      </div>
    </Container>
  );
}
