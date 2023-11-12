import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import missingImg from "../../../Assets/News/news_missing_img.png";

export function NewsLayoutRow() {
  const [news, setNews] = useState([]);
  const [dateToday, setDateToday] = useState(new Date());
  const [monthToday, setMonthToday] = useState(new Date());
  const [showMorePosts, setShowMorePosts] = useState(false);

  const date = new Date();

  // console.log("news", news);

  useEffect(() => {
    setShowMorePosts(true);
    setDateToday(date.getDate());
    setMonthToday(date.getMonth());
  }, []);

  // console.log("date", date);
  // console.log("dateToday", dateToday);
  // console.log("monthToday", monthToday);
  // console.log("setYearToday", yearToday);

  useEffect(() => {
    fetch(
      // `https://newsapi.org/v2/top-headlines?sources=software&apiKey=dba4fba83f824f79a07764a22fb0075e`
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
      <section className="post_section_all-row">
        <section className="post_section_container-outer-row">
          <div>
            {news &&
              news.slice(0, 8).map((post, i) => {
                return (
                  <div
                    className="posts-row"
                    key={i + Math.floor(Math.random() * 100000)}
                  >
                    <Link to={`/all_news/${post.title}`}>
                      <div className="posts-img-container-row">
                        <img
                          className="posts-img-row"
                          src={post.urlToImage ? post.urlToImage : missingImg}
                          alt="react post"
                        />
                      </div>
                      {/* {console.log("post.urlToImage", i, post.urlToImage)} */}
                      <div className="posts_info-row">
                        <h2 className="posts_info_h2-row textoverflow">
                          {post.title}
                        </h2>

                        <span className="post_auther_info_name-row">
                          {post.author ? "@" + post.author : "@Unknown Auther"}
                        </span>
                        <time className="post_auther_info_date-row">
                          {format(
                            new Date(post.publishedAt),
                            "MMM d yyyy, HH:MM"
                          )}
                        </time>

                        <p className="post_auther_info_summary-row ">
                          {post.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </section>
      </section>
    </>
  );
}
