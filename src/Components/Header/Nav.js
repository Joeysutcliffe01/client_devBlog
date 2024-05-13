import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import userIcon from "../../Assets/Nav/user_icon.png";
import { CapitalizeFirst } from "../capitalizeFirst/CapitalizeFirst";

export const Nav = ({
  menu,
  setMenu,
  hideNavBar,
  userInfoLocal,
  setUserInfoLocal,
}) => {

  const { setUserInfo, setIsLogedIn } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(userInfoLocal?.usersAvatar){
      setAvatarSrc(userInfoLocal?.usersAvatar)
    }else{
      setAvatarSrc(userIcon)
    }
  }, [userInfoLocal]);

  // console.log("userInfoLocal?.usersAvatar inside of nav......", userInfoLocal)
  // console.log("avatarSrc inside of nav>", avatarSrc)


  const { pathname } = useLocation();

  const handelMenu = () => {
    setMenu((prev) => !prev);
  };

  // endPoints:
  // http://localhost:4000
  // http://localhost:4000


  const logout = () => {
    fetch("https://backend-devblog.onrender.com/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    setMenu(false);
    setIsLogedIn(false);
    setUserInfoLocal(null);
    localStorage.removeItem("user_information");
    navigate('/');
  };

  if (redirect) {
    return navigate('/');
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
              src={avatarSrc}
              alt="logedin user"
              className={"user_img"}
              onClick={handelMenu}
            />
            <div className={menu ? "menu" : "menu_closed"}>
              <button onClick={handelMenu} className="menu_btn">
                {menu ? "X" : "-"}
              </button>
              <div className="menu_user_info">
                <img
                  src={avatarSrc}
                  alt="logedin user icon"
                  className="menu_user_info_img"
                />
                <h3 className="menu_user_info_h3">
                  {userInfoLocal && (
                    <CapitalizeFirst str={userInfoLocal.username} />
                  )}
                </h3>
              </div>
              <div className="nav_menu_btns_container">
                <Link to="/guids/js" className="nav_menu_btns">
                  Guides
                </Link>
                <Link to="/all_blogs" className="nav_menu_btns">
                  Blog
                </Link>
                <Link onClick={logout} className="nav_menu_btns">
                  Logout
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
