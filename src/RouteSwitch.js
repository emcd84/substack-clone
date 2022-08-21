import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import MenuBar from "./components/MenuBar";
import Homepage from "./pages/Homepage";
import Archivepage from "./pages/Archivepage";
import Aboutpage from "./pages/Aboutpage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Subscribepage from "./pages/Subscribepage";
import Post from "./pages/Post";
import { db } from "./firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function RouteSwitch() {
  const [posts, setPosts] = useState([]);
  const [aboutText, setAboutText] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [postLiked, setPostLiked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  function subscribe() {
    setSubscribed(true);
  }

  function togglePostLiked() {
    if (postLiked === true) {
      setPostLiked(false);
    } else {
      setPostLiked(true);
    }
  }

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (loggedIn === false) setLoggedIn(true);
    } else {
      if (loggedIn === true) setLoggedIn(false);
    }
  });

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
        <Route
          path='/'
          element={
            <TopBar mode='main' loggedIn={loggedIn} subscribed={subscribed} />
          }
        >
          <Route index element={<Homepage posts={posts} />} />
          <Route path='/archive' element={<Archivepage posts={posts} />} />
          <Route path='/about' element={<Aboutpage aboutText={aboutText} />} />
        </Route>
        <Route
          path='/'
          element={
            <TopBar mode='post' loggedIn={loggedIn} subscribed={subscribed} />
          }
        >
          {posts.map((post) => {
            return (
              <Route
                key={post.id}
                path={`posts/${post.id}`}
                element={
                  <Post
                    key={post.id}
                    post={post}
                    posts={posts}
                    postLiked={postLiked}
                    togglePostLiked={togglePostLiked}
                    getPostData={getPostData}
                  />
                }
              />
            );
          })}
        </Route>

        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route
          path='/subscribe'
          element={<Subscribepage subscribe={subscribe} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
