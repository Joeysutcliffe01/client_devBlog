import React, { useEffect, useState } from "react";
import { PostsLayoutColumn } from "../../Components/Posts/PostsLayoutColumn/PostsLayoutColumn";
import { Hero } from "../../Components/Hero/Hero";
import { NewsLayoutColumn } from "../../Components/News/NewsLayoutColumn/NewsLayoutColumn";
import { SlowServerMessage } from "../../Components/SlowServerMessage/SlowServerMessage";

export const Home = () => {
  const [showBanner, setShowBanner] = useState(
    window.localStorage.getItem("server_startup_message")
  );

  // window.localStorage.clear();

  useEffect(() => {
    window.localStorage.setItem(
      "server_startup_message",
      JSON.parse(showBanner)
    );
  }, [showBanner]);

  return (
    <>
      <section className="home_container">
        <Hero />
        <PostsLayoutColumn />
        <NewsLayoutColumn />
        {JSON.parse(showBanner) !== false && (
          <SlowServerMessage setShowBanner={setShowBanner} />
        )}
      </section>
    </>
  );
};
