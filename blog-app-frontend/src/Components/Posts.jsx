import Post from "../Components/Post";
import "../css/posts.css";
import { Context } from "../context/Context";
import { useContext } from 'react';
import "../../src/App.css"


export default function Posts(props) {
 const {user} = useContext(Context)
 console.log( props.posts);
 
  return (

    <>
    {  props.posts.length=== 0 ? (
      

<div className="posts">
  <div className="yet">
  <p>You Did Not Publish Somethig Yet ... </p>
  </div>
      
      </div>
      

    ) : (

      <div className="posts">
      {props.posts.map((p, i) =>(
        <Post post={p} key={i}/>
      ))}
      {/* <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </div>

      
      
      
    )  }
    

    </>
  );
}