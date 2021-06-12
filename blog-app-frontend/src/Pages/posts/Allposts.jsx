import React from "react";
import Posts from "../../Components/Posts";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Sidebar from "../../Components/Sidebar";
import RingLoader from "react-spinners/RingLoader";
import Header from "../../Components/Header";

export default function Allposts() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);

  //console.log(location);

  useEffect(() => {
    setLoading(true);

    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:5000/blog/v1/posts" + search
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <Sidebar />
      <div className="home">
        {loading ? (
          <div className="sweet-loading">
            <RingLoader color={"#C63232"} loading={loading} size={50} />
          </div>
        ) : (
          <Posts posts={posts} />
        )}
      </div>
    </>
  );
}
