import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import missingImg from "../../../Assets/News/news_missing_img.png";

export function NewsLayoutColumn() {
  const [news, setNews] = useState([]);
  // const [dateToday, setDateToday] = useState(new Date());
  // const [monthToday, setMonthToday] = useState(new Date());
  const [showMorePosts, setShowMorePosts] = useState(false);

  console.log("news from NewsLayoutColumn", news);

  useEffect(() => {
    setShowMorePosts(true);
    // setDateToday(dateToday?.getDate());
    // setMonthToday(monthToday?.getMonth());
  }, []);

  const handelShowMorePosts = () => {
    setShowMorePosts((prev) => !prev);
  };

  // console.log("date", date);
  // console.log("dateToday", dateToday);
  // console.log("monthToday", monthToday);
  // console.log("setYearToday", yearToday);

  useEffect(() => {
    fetch(
      // "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dba4fba83f824f79a07764a22fb0075e"
      `https://newsapi.org/v2/everything?q=software&from=2023-11-11&to=2023-11-11&sortBy=popularity&apiKey=dba4fba83f824f79a07764a22fb0075e`
    ).then((res) => {
      res.json().then((news) => {
        setNews(news.articles);
      });
    });
  }, []);

  //Ç If there are any issues with the first news api, uncomment
  // useEffect(() => {
  //   const url =
  //     "https://news-api14.p.rapidapi.com/search?q=web-development&country=us&language=en&pageSize=8&publisher=cnn.com%2Cbbc.com";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "eef162d29bmsh11f8710de43e1fbp1db100jsn00a4e4bcc838",
  //       "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     async function getnews() {
  //       const response = await fetch(url, options);
  //       const result = await response.json();
  //       console.log("result-------------------", result.articles);
  //     }
  //     getnews();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <>
      <section className="post_section">
        <section className="posts_container-outer">
          <Link
            to={"/all_news"}
            className="posts_container-outer-see-all-blogs"
          >
            <h3>
              See all articles
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
            {news &&
              news.slice(0, 8).map((post, i) => {
                return (
                  <div
                    className="posts"
                    key={i + Math.floor(Math.random() * 100000)}
                  >
                    <Link to={`/all_news/${post.title}`}>
                      <img
                        src={post.urlToImage ? post.urlToImage : missingImg}
                        alt="react post"
                      />
                      {/* {console.log("post.urlToImage", i, post.urlToImage)} */}
                      <div className="posts_info">
                        <h2 className="posts_info_h2 textoverflow">
                          {post.title}
                        </h2>

                        <span className="post_auther_info_name">
                          {post.author ? "@" + post.author : "@Unknown Auther"}
                        </span>
                        <time className="post_auther_info_date">
                          {format(
                            new Date(post.publishedAt),
                            "MMM d yyyy, HH:MM"
                          )}
                        </time>

                        <p className="post_auther_info_summary ">
                          {post.description}
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
      </section>
    </>
  );
}
