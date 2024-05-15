import { useEffect } from "react";
import { Login } from "../LoginAndRegister/Login";
import { Register } from "../LoginAndRegister/Register";
import { CreatePost } from "../CreatePost/CreatePost";
import { SinglePost } from "../Single_post/SinglePost";
import { EditPost } from "../EditPost/EditPost";
import { Navigate, Route, Routes, useLocation  } from "react-router-dom";
import { Home } from "../Home/Home";
import { AllBlogs } from "../AllBlogs/AllBlogs";
import { AllArticles } from "../AllArticles/AllArticles";
import { SingleArticle } from "../Single_article/SingleArticle";
import { PageNotFound } from "../pageNotFound/PageNotFound.js";
import { SingleCheatSheet } from "../SingleCheatSheet/SingleCheatSheet.js";
import { SingleGuids } from "../SingleGuids/SingleGuids.js";

export const RoutesPage = ({ setMenu, setUserInfoLocal, userInfoLocal }) => {
  const location = useLocation();

  // console.log("location:", location.pathname)
  
  useEffect(() => {

    // console.log("Inside of useEffect in RoutesPage:")
    
  //   if(userInfoLocal === null && location.pathname !== "/" ){
  //     console.log("Inside of useEffect in RoutesPage:")
  //     <Navigate to={"/"} />;
  //  } 
  
  }, [location])
  

  // console.log("userInfoLocal inside of routes", userInfoLocal)
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
      <Route path={"/guids/:id"} element={<SingleGuids />} />
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  );
  
};
