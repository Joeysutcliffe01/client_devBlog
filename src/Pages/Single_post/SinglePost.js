import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../Components/UserContext/UserContext";
import { motion } from "framer-motion";
import pencil from "../../Assets/Icons/icons8-pencil-480.png";
import blob5 from "../../Assets/Blobs/blob_5.svg";
import { ScrollToTheTop } from "../../utils/ScroolTo/ScrollToTheTop";

export const SinglePost = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  const showBtnAt = 800

  const dev = process.env.REACT_APP_DEV
  const prod = process.env.REACT_APP_PROD

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    }, []);

    fetch(`${dev ? dev : prod}post/${id}`).then((res) => {
      res.json().then((resInfo) => {
        setPostInfo(resInfo);
      });
    });
  }, []);

  if (!postInfo) return "";
  

  return (
    <motion.section
      className="single_post_section"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1 },
      }}
      exit={{ opacity: 0 }}
    >
      <img src={blob5} alt="devVlog blob 5" className="section_blob_top" />

      <div className="single_post_hero">
        <img
          className="single_post_cover_img"
          src={`${dev ? dev : prod}${postInfo.cover}`}
          alt="cover"
        />
        <h3>{"@" + postInfo.author.username}</h3>
        <time className="">
          {format(new Date(postInfo.createdAt), "MMM d yyyy, HH:MM")}
        </time>
        <h2 className="single_post_title">{postInfo.title}</h2>
      </div>
      <section className="single_post_content">
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
      </section>
      <section className="single_post_edit_btn_container">
        {postInfo.author.username === userInfo && (
          <Link to={`/edit/${postInfo._id}`}>
            <button className="single_post_edit_btn">
              <h3 className="single_post_edit_btn_h3">Edit</h3>
              <img
                className="single_post_edit_btn_icon"
                src={pencil}
                alt="pencil icon"
              />
            </button>
          </Link>
        )}

      </section>
      <ScrollToTheTop showBtnAt={showBtnAt}/>
    </motion.section>
  );
};
