import "./App.css";
import Onepost from "./Pages/posts/Onepost";
import Newpost from "./Pages/posts/Newpost";
import Navbar from "./Components/Navbar";
import Allposts from "./Pages/posts/Allposts";
import ChangePassword from "./Pages/user/ChangePassword";
import Home from "./Pages/home/Home";
import About from "./Pages/home/About";
import Register from "./Pages/user/Register";
import Login from "./Pages/user/Login";
import Profile from "./Pages/user/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";
import { CurrentUserProvider } from "./CurrentUserContext";
import Footer from "./Components/Footer";

function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <CurrentUserProvider>
        <Router>
          <Navbar />
          <Switch>
            
            <Route exact path="/About">
              {<About />}
            </Route>
            <Route exact path="/ChangePassword">
              {<ChangePassword />}
            </Route>
            <Route exact path="/">{<Allposts />}</Route>

            <Route exact path="/register">{user ? <Home /> : <Register />}</Route>
            <Route exact path="/login"> {user ? <Allposts /> : <Login />}</Route>
            <Route exact path="/:id">
              <Onepost />{" "}
            </Route>
            <Route exact path="/addpost">{user ? <Newpost /> : <Login />}</Route>
            <Route exact path="/Profile">{user ? <Profile /> : <Login />}</Route>
          </Switch>
        </Router>
      </CurrentUserProvider>
      <Footer />
    </div>
  );
}
export default App;
