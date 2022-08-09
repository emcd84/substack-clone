import { React, useEffect, useState } from "react";
import PostPreview from "./PostPreview";
import styles from "../styles/PostContainer.module.css";

export default function PostContainer(props) {
  const [search, setSearch] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  let mainPosts;
  if (props.previewMode === true) {
    mainPosts = props.posts.slice(1, props.posts.length);
  } else {
    mainPosts = props.posts;
  }

  function filterPosts() {
    if (search === true && props.posts.length > 0) {
      let returnArray = [];
      const posts = props.posts;

      posts.forEach((post) => {
        if (
          searchValue === "" ||
          post.title.includes(searchValue) ||
          post.subtitle.includes(searchValue) ||
          post.author.includes(searchValue)
        ) {
          returnArray.push(post);
        }
      });

      console.log(returnArray);

      setFilteredPosts(returnArray);
    }
  }

  const trackSearchValue = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  useEffect(() => {
    filterPosts();
  }, [searchValue]);

  if (search === true) {
    return (
      <div id={styles.searchContainer}>
        <div id={styles.searchBar}>
          <svg
            role='img'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            strokeWidth='1'
            stroke='#000'
            xmlns='http://www.w3.org/2000/svg'
            className='icon'
          >
            <g>
              <title></title>
              <path
                d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                stroke='#555555'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={styles.iconPath}
              ></path>
              <path
                d='M21.0004 21.0004L16.6504 16.6504'
                stroke='#555555'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={styles.iconPath}
              ></path>
            </g>
          </svg>
          <input
            autoFocus
            id={styles.searchInput}
            type='text'
            placeholder='Search…'
            onChange={trackSearchValue}
          ></input>
          <svg
            role='img'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            strokeWidth='1'
            stroke='#666666'
            xmlns='http://www.w3.org/2000/svg'
            className={styles.icon}
            onClick={() => setSearch(false)}
          >
            <g>
              <title></title>
              <path
                d='M15 5L5 15'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={styles.iconPath}
              ></path>
              <path
                d='M5 5L15 15'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className={styles.iconPath}
              ></path>
            </g>
          </svg>
        </div>
        <div id={styles.postsContainer}>
          {searchValue !== "" &&
            filteredPosts.map((post) => {
              return <PostPreview key={post.id} post={post} />;
            })}
        </div>
        {searchValue === "" && (
          <div id={styles.searchTextContainer}>
            <h1 id={styles.searchText}>Search My Newsletter</h1>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div id={styles.container}>
        <div id={styles.topBar}>
          <span id={styles.newHeader} role='heading'>
            New
          </span>
          <svg
            id={styles.icon}
            role='img'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            strokeWidth='1'
            stroke='#000'
            xmins='http://www.w3.org/2000/svg'
            onClick={() => setSearch(true)}
          >
            <g>
              <title></title>
              <path
                className={styles.iconPath}
                d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                stroke='#555555'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                className={styles.iconPath}
                d='M21.0004 21.0004L16.6504 16.6504'
                stroke='#555555'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </g>
          </svg>
        </div>
        <div id={styles.postsContainer}>
          {mainPosts.map((post) => {
            return <PostPreview key={post.id} post={post} />;
          })}
        </div>
      </div>
    );
  }
}
