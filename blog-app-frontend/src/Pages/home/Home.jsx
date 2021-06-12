import { useLocation } from "react-router";
import Sidebar from "../../Components/Sidebar";
// import Posts from '../../Components/Posts'
import "../../css/home.css";

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="home"></div>
    </>
  );
}
