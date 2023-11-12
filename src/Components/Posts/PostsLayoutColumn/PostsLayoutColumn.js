import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PostsLayoutColumn() {
  const [posts, setPosts] = useState([]);

  const [showMorePosts, setShowMorePosts] = useState(false);

  useEffect(() => {
    setShowMorePosts(true);
  }, []);

  const handelShowMorePosts = () => {
    setShowMorePosts((prev) => !prev);
  };

  useEffect(() => {
    fetch("https://backend-devblog.onrender.com/post").then((res) => {
      res.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      <section className="post_section">
        <section className="posts_container-outer">
          <Link
            to={"/all_blogs"}
            className="posts_container-outer-see-all-blogs"
          >
            <h3>
              See all blogs{" "}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </h3>
          </Link>
          <div
            className={
              showMorePosts
                ? "post_container-inner"
                : "post_container-inner-show-more"
            }
          >
            {posts &&
              posts.map((post, i) => {
                return (
                  <div
                    className="posts"
                    key={i + Math.floor(Math.random() * 100000)}
                  >
                    <Link to={`/post/${post._id}`}>
                      <img
                        src={
                          "https://backend-devblog.onrender.com/" + post.cover
                        }
                        alt="react post"
                      />
                      <div className="posts_info">
                        <h3 className="posts_info_h2 textoverflow">
                          {post.title}
                        </h3>

                        <span className="post_auther_info_name textoverflow">
                          {post.author &&
                            "@" +
                              post.author.username.charAt(0).toUpperCase() +
                              post.author.username.slice(1)}
                        </span>
                        <time className="post_auther_info_date">
                          {format(
                            new Date(post.createdAt),
                            "MMM d yyyy, HH:MM"
                          )}
                        </time>

                        <p className="post_auther_info_summary ">
                          {post.summary}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
          <h3
            className="posts_container-outer-see-more-blogs-btn"
            onClick={handelShowMorePosts}
          >
            {showMorePosts ? "Show more" : "Show less"}
          </h3>
        </section>

        {/* ---------------------------------- post 2*/}
      </section>
    </>
  );
}
