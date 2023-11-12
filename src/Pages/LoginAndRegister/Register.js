import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import illustration from "../../Assets/LoginPage/login_illustration.png";

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import registerAnimation from "../../Assets/LottieAnimatio/Home/register_animation.json";
import registerBtnAnimation from "../../Assets/LottieAnimatio/loading/loading_loihekua.json";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successfulReg, setSuccessfulReg] = useState(false);
  const [badUsername, setBadUsername] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      setSuccessfulReg(true);
      setUsername("");
      setPassword("");
      setBadUsername(false);
      setIsLoading(false);
    } else {
      setBadUsername(true);
      setIsLoading(false);
    }
  };

  if (successfulReg) {
    return <Navigate to={"/login"} />;
  }

  return (
    <motion.div
      className="register_container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1 },
      }}
      exit={{ opacity: 0 }}
    >
      <section className="login_register_section">
        <Link to={"/"} className="login_register_section_home_link">
          {" "}
          <h2>devBloog</h2>
        </Link>
        <form onSubmit={register}>
          <h3 className="login_register_section_h2">Create your account</h3>
          <div className="login_register_section_info">
            <p className="login_register_section_p">
              Already have an account?{" "}
            </p>
            <Link to={"/login"} className="login_register_section_link">
              Login!
            </Link>
          </div>
          <div className="login_register_section_username_input_container">
            <h3>Username</h3>
            <input
              type="username"
              placeholder="Enter username"
              value={username}
              name=""
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login_register_section_password_input_container">
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              name=""
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
                    backgroundColor: "rgb(222,185,245)",
                    color: "white",
                  }}
                >
                  Loading...
                </button>
                <Lottie
                  animationData={registerBtnAnimation}
                  style={{ height: "10rem" }}
                />
              </>
            )}
          </div>
        </form>
      </section>
      <section className="register_illustration">
        {badUsername ? (
          <div className="bad_username_container">
            <h2>Looks like this username has already been taken</h2>
            <p>Please try something else</p>
          </div>
        ) : (
          <Lottie animationData={registerAnimation} style={{ height: "99%" }} />
        )}
      </section>
    </motion.div>
  );
};
