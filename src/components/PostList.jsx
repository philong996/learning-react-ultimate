import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {

  return (
    <ul className={styles.posts}>
        <Post title="title 1" body="body 1"/>
        <Post title="title 2" body="body 2"/>
        <Post title="title 3" body="body 3"/>
        <Post title="title 4" body="body 4"/>
    </ul>
  )
}

export default PostList;