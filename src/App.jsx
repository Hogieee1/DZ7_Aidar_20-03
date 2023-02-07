import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList/UserList";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import PostList from "./components/PostList/PostList";
import Post from "./components/Post/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
