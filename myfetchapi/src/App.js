import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    Axios.get("https://all-the-weather.herokuapp.com/cities").then(
      (response) => {
        const data = response.data.items;
        console.log(data);
        setPost(data);
      }
    );
  }, []);
  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <div className="card">
            <div>{post.name}</div>
            <div>{post.regionCode}</div>
            <div>{post.id}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
