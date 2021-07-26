import { Post } from "../store/types";
import InfoPost from "./InfoPost";

export default function PostsCards(props: any) {
  const allPosts = props.allPosts;

  return (
    <div className="allPosts">
      {allPosts.map((post: Post) => {
        return <InfoPost post={post} key={post.id}/>;
      })}
    </div>
  );
}
