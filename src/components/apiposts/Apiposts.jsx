import React, { useEffect, useState } from "react";
import "./Apiposts.scss";
const Apiposts = () => {
  const [users, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  const fetchUser = async () => {
    try {
      const str = await fetch("https://jsonplaceholder.typicode.com/users");
      const st = await str.json();
      setUser(st);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchItems = async (id) => {
    try {
      const str = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id.target.id}`);
      const st = await str.json();
      setPosts(st);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTodos = async (id) => {
    try {
      const str = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${id.target.id}`
      );
      const st = await str.json();
      setTodos(st);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div className="userscards">
      <div className="users">
        {users.map((users) => (
          <ul  key={users.id}>
            <li>{users.id}</li>
            <li>{users.name}</li>
            <li>{users.username}</li>
            <li>{users.email}</li>
            <button 
            id={users.id} 
            onClick={(e) => fetchItems(e)}
            
            >
              Posts
            </button>
            <button
              id={users.id}
              className="todos"
              onClick={(e) => fetchTodos(e)}
            >
              Todos
            </button>
          </ul>
        ))}
      </div>
      <div>
        <div className="posts">
          {posts?.length
            ? posts.map((posts) => <>
            <ul className="postss" key={posts.userId}>
                      <li>{posts.id}</li>
                      <li>{posts.title}</li>
                      <li>{posts.body}</li>
                    </ul>
              
            </>
                )
            : ""}
        </div>
        <div className="posts">
          {todos?.length
            ? todos.map((todos) => <>
                <ul className="todoss" key={todos.userId}>
                  <li>{todos?.id}</li>
                  <li>{todos?.title}</li>
                  <li>{todos?.completed}</li>
                </ul>;
              </>)
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Apiposts;
