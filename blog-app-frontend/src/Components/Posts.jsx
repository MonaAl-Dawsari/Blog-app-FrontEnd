import Post from "../Components/Post";
import "../css/posts.css";

export default function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((p, i) =>(
        <Post post={p} key={i}/>
      ))}
      {/* <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </div>
  );
}