import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PostsLayoutRow() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://backend-devblog.onrender.com/post").then((res) => {
      res.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      <section className="post_section_all-row">
        <section className="post_section_container-outer-row">
          <div>
            {posts &&
              posts.map((post, i) => {
                return (
                  <div
                    className="posts-row"
                    key={i + Math.floor(Math.random() * 100000)}
                  >
                    <Link to={`/post/${post._id}`}>
                      <img
                        className="posts-row-img"
                        src={
                          "https://backend-devblog.onrender.com/" + post.cover
                        }
                        alt="react post"
                      />
                      <div className="posts_info-row">
                        <h3 className="posts_info_h2-row textoverflow">
                          {post.title}
                        </h3>

                        <span className="post_auther_info_name-row textoverflow">
                          {post.author &&
                            "@" +
                              post.author.username.charAt(0).toUpperCase() +
                              post.author.username.slice(1)}
                        </span>
                        <time className="post_auther_info_date-row">
                          {format(
                            new Date(post.createdAt),
                            "MMM d yyyy, HH:MM"
                          )}
                        </time>

                        <p className="post_auther_info_summary-row ">
                          {post.summary}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>

        {/* ---------------------------------- post 2*/}
      </section>
    </>
  );
}
