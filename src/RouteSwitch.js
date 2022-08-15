import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import Homepage from "./pages/Homepage";
import Archivepage from "./pages/Archivepage";
import Aboutpage from "./pages/Aboutpage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Post from "./pages/Post";
import { db } from "./firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export default function RouteSwitch() {
  const [posts, setPosts] = useState([]);
  const [aboutText, setAboutText] = useState(null);

  async function getPostData() {
    const returnArray = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      returnArray.push(doc.data());
    });

    setPosts(returnArray);
  }

  async function getAboutText() {
    const docRef = doc(db, "siteInfo", "About");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setAboutText(docSnap.data().bio);
    } else {
      console.log("error");
    }
  }

  useEffect(() => {
    getPostData();
    getAboutText();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuBar />}>
          <Route path='/home' element={<Homepage posts={posts} />} />
          <Route path='/archive' element={<Archivepage posts={posts} />} />
          <Route path='/about' element={<Aboutpage aboutText={aboutText} />} />
          {posts.map((post) => {
            return (
              <Route
                key={post.id}
                path={`/posts/${post.id}`}
                element={<Post post={post} posts={posts} />}
              />
            );
          })}
        </Route>
        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
