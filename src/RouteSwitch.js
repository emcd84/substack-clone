import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Homepage from "./pages/Homepage";
import Archivepage from "./pages/Archivepage";
import Aboutpage from "./pages/Aboutpage";
import Post from "./pages/Post";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function RouteSwitch() {
  const [posts, setPosts] = useState([]);

  async function getPostData() {
    const returnArray = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      returnArray.push(doc.data());
    });

    setPosts(returnArray);
  }

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Homepage posts={posts} />} />
        <Route path='/archive' element={<Archivepage posts={posts} />} />
        <Route path='/about' element={<Aboutpage />} />
        {posts.map((post) => {
          return (
            <Route
              key={post.id}
              path={`/posts/${post.id}`}
              element={<Post post={post} posts={posts} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
