import React from 'react';
import Posts from '../../Components/Posts'
import {useState, useEffect} from 'react';
import axios from 'axios';

 export default function Allposts() {
  const [posts, setPosts] = useState([]);
 

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/blog/v1/posts");
      setPosts(res.data)
      
    };
    fetchPosts();
  }, []);
  return (
    <>
      
      <div className="home">
      all posts  
          <Posts posts={posts} />
        
        
      </div>
    </>
  );
}
