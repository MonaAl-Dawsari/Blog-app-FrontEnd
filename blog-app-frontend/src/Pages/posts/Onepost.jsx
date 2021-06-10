// not auther >> see post and add comment
//auther >> can delete update her/his post\\
import Sidebar from '../../Components/Sidebar'
import React, { useContext } from 'react'
import "../../css/Onepost.css"
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';


export default function Onepost() {
    const location = useLocation()
    const id = location.pathname.split("/")[2] //to extract the postID out of the pathname
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context)

    useEffect(() => {
        const onePost = async () => {
            const res = await axios.get("http://localhost:5000/blog/v1/posts/" + id);
            setPost(res.data);
            //   setTitle(res.data.title);
            //   setDesc(res.data.desc);
        };
        onePost();
    }, [id]);
    return (

        <div className="onePost">
            <Sidebar />
            <div className="onePostWrapper">
                {post.photo && (

                    <img className="onePostImg"
                        src={PF + post.photo}
                        alt="" />
                )}

                <h1 className="onePostTitle">
                    {post.title}
                    {post.username === user.username && (
                        <div className="edit">
                            <i className="onePostIcon far fa-edit"></i>
                            <i className="onePostIcon far fa-trash-alt"></i>
                        </div>
                    )}
                </h1>
                <div className="onePostInfo">
                    <span className="onePostAuthor"> {post.username}</span>
                    <span className="onePostDate">{new Date(post.createdAt).toDateString()}</span>

                </div>

                <p className="onePostDesc">{post.desc}
                </p>
            </div>



        </div>
    )
}




