import React, {useState , useEffect} from 'react'
import './App.css';
import Post from './components/Post';
import Pagination from './components/Pagination';
import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/posts';

const App = () => {
  const [posts , setPosts] = useState([]);
  const [error , setError] = useState([]);
  useEffect(async() => {
    await axios.get(url)
      .then(res => {
        setPosts(res.data)
        console.log(res);
      })
      .catch(err => console.log(err))
  }, [])
   return (
    <>{posts? 
      <div>{console.log(posts)}
      {posts.length > 0 ? (
        <>
        <Pagination data ={posts}
        RenderComponent={Post}
        title="posts"
        pageLimit={5}
        dataLimit={10}/>
        </>
      ) : (
        <h1>loading</h1>
      )
    }
    </div>: <h1>loading </h1>}</>
  )

}
export default App;