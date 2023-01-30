import './App.css'
import NewPost from "./components/NewPost";
import PostList from "./components/PostList";

const names = ['long1', 'long2']

function App() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div className="App">
      <h1>React Twitter</h1>
      <PostList />
    </div>
  )
}

export default App
