import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blob5 from "../../Assets/Blobs/blob_5.svg";

export const SingleArticle = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  const category = "software development"

  const apikey = '583b2afd5f6e28180dc60eae68bdfccb';
  const url = 'https://gnews.io/api/v4/search?q=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;

  // console.log("id from SingleArticle", author);
  console.log("id from SingleArticle", article);

  useEffect(() => {
    fetch(url).then((res) => {

      console.log("res inside of SingleArticle", res)
      res.json().then((news) => {
        setArticle(news.articles.find((art) => art.title === id));
      });
    });
  }, []);

  // console.log();

  // if (!postInfo) return "";

  // console.log(
  //   "singlePost----------------",
  //   postInfo.author.username === userInfo
  // );
  // console.log("userInfo----------------", userInfo);

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

      {article && (
        <>
          <div className="single_post_hero">
            <img
              className="single_post_cover_img"
              src={article?.image}
              alt="cover"
            />
            <h3>{"@" + article?.source.name}</h3>

            <h2 className="single_post_title">{article.title}</h2>
          </div>
          <section className="">{article.description}</section>
          <section className="single_post_content">
            {/* Find how to info on: https://newsapi.org/docs/guides/how-to-get-the-full-content-for-a-news-article */}
            <section className="single_post_content">
                <div>
                  <p>{article?.content}</p>
                </div>
            </section>
          </section>
        </>
      )}
    </motion.section>
  );
};
