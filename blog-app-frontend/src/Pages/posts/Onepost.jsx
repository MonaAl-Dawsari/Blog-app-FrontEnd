// not auther >> see post and add comment
//auther >> can delete update her/his post\\
import Sidebar from '../../Components/Sidebar'
import React, { useContext } from 'react'
import "../../css/Onepost.css"
import { useLocation } from 'react-router'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';


export default function Onepost() {
    const location = useLocation()
    const id = location.pathname.split("/")[2] //to extract the postID out of the pathname
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")
    const [updateMode,setUpdateMode]=useState(false)


    useEffect(() => {
        const onePost = async () => {
            const res = await axios.get("http://localhost:5000/blog/v1/posts/" + id ,{data:{username:user.username}});
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        onePost();
    }, [id]);
    const handleDelete = async ()=>{
        try {
            await axios.delete("http://localhost:5000/blog/v1/posts/"+id)
            //window.location.replace("/posts/");
            updateMode (false)
        }catch(err){

        }
    }
    console.log(post);
    const handleUpdate = async ()=>{
        try {
            await axios.put("http://localhost:5000/blog/v1/posts/"+id ,{username:user.username, title,desc})
            window.location.reload();
        }catch(err){

        }

    }
    return (

        <div className="home">      

        <div className="onePost">
            
            <div className="onePostWrapper">
                {post.photo && (

                    <img className="onePostImg"
                        src={PF + post.photo}
                        alt="" />
                )}{
                    updateMode ? <input type="text" value={title} className="onePostTitle" onChange={(e)=>setTitle(e.target.value)} /> : (


                        <h1 className="onePostTitle">
                    {title}
                    {post.username === user.username && (
                        <div className="edit">
                            <i className="onePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                            <i className="onePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                        </div>
                    )}
                </h1>
                
                    )
                }

                

                
                <div className="onePostInfo">
                    


                
        <Link to={`/posts/?user=${post.username}`} className="link">
                    <span className=""> {post.username}</span>
        </Link>
                    <span className="onePostDate">{new Date(post.createdAt).toDateString()}</span>

                </div>
                {updateMode ? ( <textarea className="onePostDescInput"  value={desc} onChange={(e)=>setDesc(e.target.value)}/> ) : (
                <p className="onePostDesc">{desc}
                </p>)}

                {updateMode && (
                     <button className="onePostButton" onClick={handleUpdate}>Update</button>
                ) }
               
            </div>



        </div>
        <Sidebar />
        </div>  
    )
}




