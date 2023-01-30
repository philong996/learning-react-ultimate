

import styles from "./NewPost.module.css";

function NewPost(props) {
  
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <textarea id="name" required rows={3} />
      </p>

    </form>
  )
}

export default NewPost;