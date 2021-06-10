import './App.css';
import Onepost from "./Pages/posts/Onepost";
import Newpost from "./Pages/posts/Newpost";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Allposts from './Pages/posts/Allposts';
import Home from './Pages/home/Home';
import Register from './Pages/user/Register';
import Login from './Pages/user/Login';
import Profile from './Pages/user/Profile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from './context/Context';
import {useContext} from 'react';
import { CurrentUserProvider } from "./CurrentUserContext"

function App() {
  const {user} = useContext(Context);
  return (
    <div className="App">
      <CurrentUserProvider>
     <Router>
     <Navbar/>
      <Switch>
        <Route exact path="/">
         {<Home/> } 
        </Route>
        <Route path="/posts">
          {<Allposts/> }
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}</Route>
        <Route path="/login"> {user ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Onepost />   </Route>
        <Route path="/addpost">{user ? <Newpost /> : <Login />}</Route>
        <Route path="/Profile">{user ? <Profile /> : <Login />}
        </Route>
      </Switch>
    </Router>
    <Footer/>
    </CurrentUserProvider>
    </div>
  );
}
export default App;