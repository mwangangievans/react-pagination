import React, {useState , useEffect} from 'react'
import './App.css';
import Post from './components/Post';

const url = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [posts , setPosts] = useState([]);
  const [error , setError] = useState([]);
  useEffect(()=>{
    fetch(url)
    .then((response)=>{
      if(response.ok) return 
      response.json();
      throw new Error('something went wrong while requesting posts');
    }).then((posts)=> setPosts(posts))
    .catch((error)=>setError(error.message));
  }, []);
  if (error)  return <h1>{error}</h1>;
  return (
    <div>
      {posts.length > 0 ? (
        <>
        <Pagination data ={posts}
        RenderComponents={Post}
        title="posts"
        pageLimit={5}
        dataLimit={10}/>
        </>
      ) : (
        <h1>No Post to display </h1>
      )
    }
    </div>
  );
}
export default App;