import React from "react";
import { Login } from "../LoginAndRegister/Login";
import { Register } from "../LoginAndRegister/Register";
import { CreatePost } from "../CreatePost/CreatePost";
import { SinglePost } from "../Single_post/SinglePost";
import { EditPost } from "../EditPost/EditPost";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { AllBlogs } from "../AllBlogs/AllBlogs";
import { AllArticles } from "../AllArticles/AllArticles";
import { SingleArticle } from "../Single_article/SingleArticle";

export const RoutesPage = ({ setMenu, setUserInfoLocal, userInfoLocal }) => {
  return (
    // <Routes location={location} key={location.pathname}>
    <Routes>
      <Route index element={<Home userInfoLocal={userInfoLocal} />} />
      <Route
        path={"/login"}
        element={<Login setUserInfoLocal={setUserInfoLocal} />}
      />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/create_post"} element={<CreatePost setMenu={setMenu} />} />
      <Route path={"/all_blogs"} element={<AllBlogs />} />
      <Route path={"/all_news"} element={<AllArticles />} />
      <Route path={"/all_news/:id"} element={<SingleArticle />} />
      <Route path={"/post/:id"} element={<SinglePost />} />
      <Route path={"/edit/:id"} element={<EditPost />} />
    </Routes>
  );
};
