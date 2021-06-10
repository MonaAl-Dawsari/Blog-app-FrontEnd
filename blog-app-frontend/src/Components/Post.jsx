import { Link } from "react-router-dom";
import "../css/posts.css";

export default function Post(props) {
  const PF = "http://localhost:5000/images/";
  console.log(props)
  return (
    <div className="post">
      {props.post.photo && (
        <img
          className="postImg"
          src={PF + props.post.photo}
          alt=""
        />
      )}
      <div className="postInfo">
        <div className="postCats">{
          props.post.categories.map(c => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${props.post._id}`} className="link">
          <span className="postTitle">{props.post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(props.post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {props.post.desc}
      </p>
    </div>
  );
}