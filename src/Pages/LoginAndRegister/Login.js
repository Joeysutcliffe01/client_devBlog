import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import { useRef } from "react";
import { UserContext } from "../../Components/UserContext/UserContext";

import Lottie from "lottie-react";
import loginAnimation from "../../Assets/LottieAnimatio/Home/login_animation_2.json";
import loginLoadingBtn from "../../Assets/LottieAnimatio/loading/loading_loihekua.json";
import { motion } from "framer-motion";

export const Login = ({ setUserInfoLocal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [badCredentials, setBadCredentials] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const { setUserInfo, setIsLogedIn } = useContext(UserContext);
  // const animationRef = useRef(null);

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("https://backend-devblog.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    // window.localStorage.clear();

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
        setIsLogedIn(true);
        setIsLoading(false);
        setUserInfoLocal(userInfo);
        window.localStorage.setItem(
          "user_information",
          JSON.stringify(userInfo)
        );
      });
    } else {
      setBadCredentials(true);
      setIsLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  // console.log("Lottie", Lottie);

  return (
    <motion.div
      className="login_container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0 },
      }}
      exit={{ opacity: 0 }}
    >
      <section className="login_register_section">
        <Link to={"/"} className="login_register_section_home_link">
          {" "}
          <h2>devBloog</h2>
        </Link>
        <form onSubmit={login} className="login_section_form">
          <h3 className="login_register_section_h2">
            Login in to your account
          </h3>
          <div className="login_register_section_info">
            <p className="login_register_section_p">Dont have an account? </p>
            <Link to={"/register"} className="login_register_section_link">
              Sign up!
            </Link>
          </div>
          {badCredentials ? (
            <p className="login_section_badc_credentials">
              Please recheck your username and password
            </p>
          ) : (
            ""
          )}

          <div className="login_register_section_username_input_container">
            <h3>Username</h3>
            <input
              type="username"
              // placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login_register_section_password_input_container">
            <h3>Password</h3>
            <input
              type="password"
              // placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login_registe_btn-container">
            {!isloading ? (
              <button className="login_register_section_btn">Login</button>
            ) : (
              <>
                <button
                  className="login_register_section_btn"
                  style={{
                    backgroundColor: "rgb(185,204,245)",
                    color: "white",
                  }}
                >
                  Loading...
                </button>
                <Lottie
                  animationData={loginLoadingBtn}
                  style={{ height: "10rem" }}
                />
              </>
            )}
          </div>
        </form>
      </section>
      <section className="login_illustration">
        <Lottie
          animationData={loginAnimation}
          loop={false}
          style={{ height: "99%" }}
        />
      </section>
    </motion.div>
  );
};
