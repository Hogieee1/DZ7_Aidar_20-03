import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../Api";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.get("posts").then((response) => {
      setPosts(response.data);
      setFilteredPosts(response.data);
    });
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
          || post.body.toLowerCase().includes(searchTerm.toLowerCase())
          || post.userId == searchTerm
      )
    );
  }, [searchTerm]);

  return (
    <>
      <input
      className="postList-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Поиск..."
      />
      <ul>
        {filteredPosts.map((post) => (
          <Link className="link" to={`post/${post.id}`} key={post.id}>
            <h2>Author: {post.userId},</h2>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
          </Link>
        ))}
      </ul>

    </>
  );
}

export default PostList;
