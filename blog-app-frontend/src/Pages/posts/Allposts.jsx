import React from 'react';
import Posts from '../../Components/Posts'
 import {useState, useEffect} from 'react';
 import { useLocation } from "react-router";
 import axios from 'axios';
import Sidebar from '../../Components/Sidebar'
import BeatLoader from "react-spinners/BeatLoader";

 export default function Allposts() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation ();
  const [loading , setLoading] =useState (false)

  //console.log(location);

  useEffect(() => {

    setLoading (true)

    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/blog/v1/posts" + search);
      setPosts(res.data)
      setLoading (false)
      
    };
    fetchPosts();
    
  }, [ search]);
  return (
    <>
      
      <div className="home">
      {
        loading ? 

       <div className="sweet-loading">
         <BeatLoader color={"#C63232"} loading={loading}  size={20} />
       </div> 
        
        :

<Posts posts={posts} />
      } 
          
          <Sidebar />
        
        
      </div>
    </>
  );
}