import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Lottie from "lottie-react";
import skelaton from "../../../Assets/LottieAnimatio/loading/skeleton_boxes/skeleton_box_2.json";

export function PostsLayoutColumn() {
  const [posts, setPosts] = useState([]);

  const [showMorePosts, setShowMorePosts] = useState(false);

  useEffect(() => {
    setShowMorePosts(true);
  }, []);

  const handelShowMorePosts = () => {
    setShowMorePosts((prev) => !prev);
  };

  // http://localhost:4000/

  useEffect(() => {
    fetch("https://backend-devblog.onrender.com/post").then((res) => {
      res.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  // console.log("posts;", posts)

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
            {posts.length !== 0 ?
              ( posts.map((post, i) => {
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
              })
              ) : 
              <>
              <div className="posts" >
                    
                    <Lottie animationData={skelaton}  style={{marginTop:"-1rem"}}/>
                      <div className="posts_info">
                        <h3 className="posts_info_h2 textoverflow" style={{minWidth:"10rem", backgroundColor:"#F7F7F8", color:"#F7F7F8", marginTop:"-1rem"}}>
                         _
                        </h3>

                        <span className="post_auther_info_name textoverflow" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ______
                        </span>
                        <time className="post_auther_info_date" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ________________
                        </time>

                        <p className="post_auther_info_summary " style={{width:"100%", backgroundColor:"#F7F7F8"}}>
                        {"                   "}
                        </p>
                      </div>
              
                  </div>
                  <div className="posts" >
                    
                    <Lottie animationData={skelaton}  style={{marginTop:"-1rem"}}/>
                      <div className="posts_info">
                        <h3 className="posts_info_h2 textoverflow" style={{minWidth:"10rem", backgroundColor:"#F7F7F8", color:"#F7F7F8", marginTop:"-1rem"}}>
                         _
                        </h3>

                        <span className="post_auther_info_name textoverflow" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ______
                        </span>
                        <time className="post_auther_info_date" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ________________
                        </time>

                        <p className="post_auther_info_summary " style={{width:"100%", backgroundColor:"#F7F7F8"}}>
                        {"                   "}
                        </p>
                      </div>
              
                  </div>
                  <div className="posts" >
                    
                    <Lottie animationData={skelaton}  style={{marginTop:"-1rem"}}/>
                      <div className="posts_info">
                        <h3 className="posts_info_h2 textoverflow" style={{minWidth:"10rem", backgroundColor:"#F7F7F8", color:"#F7F7F8", marginTop:"-1rem"}}>
                         _
                        </h3>

                        <span className="post_auther_info_name textoverflow" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ______
                        </span>
                        <time className="post_auther_info_date" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ________________
                        </time>

                        <p className="post_auther_info_summary " style={{width:"100%", backgroundColor:"#F7F7F8"}}>
                        {"                   "}
                        </p>
                      </div>
              
                  </div>
                  <div className="posts" >
                    
                    <Lottie animationData={skelaton}  style={{marginTop:"-1rem"}}/>
                      <div className="posts_info">
                        <h3 className="posts_info_h2 textoverflow" style={{minWidth:"10rem", backgroundColor:"#F7F7F8", color:"#F7F7F8", marginTop:"-1rem"}}>
                         _
                        </h3>

                        <span className="post_auther_info_name textoverflow" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ______
                        </span>
                        <time className="post_auther_info_date" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ________________
                        </time>

                        <p className="post_auther_info_summary " style={{width:"100%", backgroundColor:"#F7F7F8"}}>
                        {"                   "}
                        </p>
                      </div>

                      <div className="posts" >
                    
                      <Lottie animationData={skelaton}  style={{marginTop:"-1rem"}}/>
                      <div className="posts_info">
                        <h3 className="posts_info_h2 textoverflow" style={{minWidth:"10rem", backgroundColor:"#F7F7F8", color:"#F7F7F8", marginTop:"-1rem"}}>
                         _
                        </h3>

                        <span className="post_auther_info_name textoverflow" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ______
                        </span>
                        <time className="post_auther_info_date" style={{width:"100%", backgroundColor:"#F7F7F8", color:"#F7F7F8"}}>
                        ________________
                        </time>

                        <p className="post_auther_info_summary " style={{width:"100%", backgroundColor:"#F7F7F8"}}>
                        {"                   "}
                        </p>
                      </div>
              
                  </div>
              
                  </div>
              </>
                  
              }
           
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
