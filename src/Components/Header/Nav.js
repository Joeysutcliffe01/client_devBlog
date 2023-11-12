import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import userIcon from "../../Assets/Nav/user_icon.png";
import { CapitalizeFirst } from "../capitalizeFirst/CapitalizeFirst";

// const logedInUserInfo =
//   window.localStorage.getItem("user_information") || false;

export const Nav = ({
  menu,
  setMenu,
  hideNavBar,
  userInfoLocal,
  setUserInfoLocal,
}) => {
  const { setUserInfo, userInfo, isLogedIn, setIsLogedIn } =
    useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  // const [userInfoLocal, setUserInfoLocal] = useState(false);

  const { pathname } = useLocation();
  // window.location.reload(false);
  // window.location.reload();

  // console.log("userInfoLocal from Nav---------", userInfoLocal);

  // useEffect(() => {
  //   fetch("http://localhost:4000/profile", {
  //     credentials: "include",
  //   }).then((res) => {
  //     res.json().then((userInfo) => {
  //       setUserInfoLocal(userInfo.username);
  //     });
  //   });
  //   // setRedirect(true);
  //   // console.log("userInfo from nav useEffect", userInfoLocal);
  //   // setUserInfoLocal(JSON.parse(logedInUserInfo));
  // }, []);

  // console.log("userInfoLocal from Nav-----------------------", userInfoLocal);

  const handelMenu = () => {
    setMenu((prev) => !prev);
  };

  // console.log("userInfoLocal from Nav------------??????????", userInfoLocal);
  // console.log("userInfo from Nav------------??????????", userInfo);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    setMenu(false);
    setIsLogedIn(false);
    setUserInfoLocal(null);
    localStorage.removeItem("user_information");
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  if (pathname.includes("login")) return;
  if (pathname.includes("register")) return;

  return (
    <header className={hideNavBar ? "display_none" : "header"}>
      <nav>
        <Link to="/" className="logo">
          devBlog
        </Link>
        {!userInfoLocal && (
          <ul>
            <Link to="/login">
              <li className="nav_login">Login</li>
            </Link>

            <Link to="/register">
              <li className="nav_register">Sign up</li>
            </Link>
          </ul>
        )}
        {userInfoLocal && (
          <>
            <img
              src={userIcon}
              alt="logedin user"
              className={"user_img"}
              onClick={handelMenu}
            />
            <div className={menu ? "menu" : "menu_closed"}>
              <button onClick={handelMenu} className="menu_btn">
                {menu ? "X" : "-"}
              </button>
              <div className=" menu_user_info">
                <img
                  src={userIcon}
                  alt="logedin user icon"
                  className="menu_user_info_img"
                />
                <h3 className="menu_user_info_h3">
                  {userInfoLocal && (
                    <CapitalizeFirst str={userInfoLocal.username} />
                  )}
                  {/* {userInfoLocal && userInfoLocal.username} */}
                </h3>
              </div>

              {/* <Link
                to="/create_post"
                className="menu_create_post"
                onClick={handelMenu}
              >
                Create post
              </Link> */}
              <button onClick={logout} className="menu_logout">
                Logout
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
