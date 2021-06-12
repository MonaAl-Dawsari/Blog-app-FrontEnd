import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
// import { useState } from "react";
import "../../css/login.css";
// import Alert from '@material-ui/lab/Alert';
// import Container from '@material-ui/core/Container';
// import { useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const [error, setError] = useState(false);
  // // const [flag, setFlag] = useState(false);
  // const history= useHistory()
  // const [success, setSuccess] = useState(false);
  // const [message, setMessage] = useState("")
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      // setError(true)
      // setMessage(res.data.message)
      // setSuccess(true)
      // setTimeout(() => history.push('/') , 1000)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      // setMessage("Invalid Email or Passsword")
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  // console.log(res)
  return (
    // <Container component="main" maxWidth="xs">
    //     { error &&
    //         (success ? <Alert severity="success">{message}</Alert> :
    //             <Alert severity="error">{message}</Alert>)
    //     }
    <div className="login">
      <div className="login-card">
        <span className="loginTitle">
          <span>User</span> Login
        </span>
        <img src="" alt="" />
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your Email..."
            ref={emailRef}
          />
          <label>Password</label>
          <input
            type="password"
            className="loginInput"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </div>
    </div>
    // </Container>
  );
}
