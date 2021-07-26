import { Link } from "react-router-dom";
import { Post } from "../store/types";

export default function InfoPost(props: any) {
  const post: Post = props.post;

  return (
    <div className="infoPost">
      <img src={post.urlImage} alt={post.title} />
      <div className="text-block">
        <Link to={`/post/${post.id}`} className="titlePost">
          <p>{post.title}</p>
        </Link>
        <p>
          {post.comments.length} Comments <i className="ri-wechat-line"></i>
        </p>
        <p>{post.description}</p>
        <p>{post.category}</p>
      </div>
    </div>
  );
}
