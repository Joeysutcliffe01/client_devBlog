import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { motion } from "framer-motion";
import blob5 from "../../Assets/Blobs/blob_5.svg";

export const SingleArticle = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  // console.log("id from SingleArticle", author);
  console.log("id from SingleArticle", article);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=software&from=2023-11-11&to=2023-11-11&sortBy=popularity&apiKey=dba4fba83f824f79a07764a22fb0075e`
    ).then((res) => {
      res.json().then((news) => {
        setArticle(news.articles.find((art) => art.title === id));
        // console.log(
        //   "looking for one Article----",
        //   news.articles.find((art) => art.title === id)
        // );

        // console.log("foundArticle-----", foundArticle);
        // setNews(news.articles);
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
              src={article?.urlToImage}
              alt="cover"
            />
            <h3>{"@" + article?.author}</h3>
            {/* <time className="">
              {format(new Date(article.createdAt), "MMM d yyyy, HH:MM")}
            </time> */}
            <h2 className="single_post_title">{article.title}</h2>
          </div>
          <section className="">{article.description}</section>
          <section className="single_post_content">
            {/* Find how to info on: https://newsapi.org/docs/guides/how-to-get-the-full-content-for-a-news-article */}
            <h1>Content coming soon</h1>
          </section>
        </>
      )}
    </motion.section>
  );
};
