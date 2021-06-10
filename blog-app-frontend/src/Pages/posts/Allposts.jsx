import React from 'react';
import Posts from '../../Components/Posts'
 import {useState, useEffect} from 'react';
 import { useLocation } from "react-router";
 import axios from 'axios';
import Sidebar from '../../Components/Sidebar'

 export default function Allposts() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation ();

  //console.log(location);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/blog/v1/posts" + search);
      setPosts(res.data)
      
    };
    fetchPosts();
  }, [ search]);
  return (
    <>
      
      <div className="home">
      all posts  
          <Posts posts={posts} />
          <Sidebar />
        
        
      </div>
    </>
  );
}