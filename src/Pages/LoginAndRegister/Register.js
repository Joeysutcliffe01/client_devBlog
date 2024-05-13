import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import illustration from "../../Assets/LoginPage/login_illustration.png";

import avatarImage1 from "../../Assets/Avatar/cat.png"
import avatarImage2 from "../../Assets/Avatar/cool.png"
import avatarImage3 from "../../Assets/Avatar/fox.png"
import avatarImage4 from "../../Assets/Avatar/man.png"
import avatarImage5 from "../../Assets/Avatar/ninja.png"
import avatarImage6 from "../../Assets/Avatar/panda.png"
import avatarImage7 from "../../Assets/Avatar/robot.png"
import avatarImage8 from "../../Assets/Avatar/woman.png"

import Lottie, { LottieRefCurrentProps } from "lottie-react";
import registerAnimation from "../../Assets/LottieAnimatio/Home/register_animation.json";
import registerBtnAnimation from "../../Assets/LottieAnimatio/loading/loading_loihekua.json";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [successfulReg, setSuccessfulReg] = useState(false);
  const [badUsername, setBadUsername] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const avatarImages = [
    {
      image: avatarImage1,
    },
    {
      image: avatarImage2,
    },
    {
      image: avatarImage3,
    },
    {
      image: avatarImage4,
    },
    {
      image: avatarImage5,
    },
    {
      image: avatarImage6,
    },
    {
      image: avatarImage7,
    },
    {
      image: avatarImage8,
    },
]

  const register = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch(
      "https://backenddevblog.onrender.com/register",
      {
        method: "POST",
        body: JSON.stringify({ username, password, avatar }),
        headers: { "Content-Type": "application/json" },
      }
    );

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

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // console.log("setAvatar -----", avatar)
  // console.log("isHovered -----", isHovered)

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
          <h2>devBlog</h2>
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
          <div className="login_register_section_password_avatar_container">
            <div className="login_register_section_password_avatar_inner_container">
            {avatarImages.map((avatarItem, index) => (
              <img
                className="login_register_section_password_avatar_img" 
                key={index}
                src={avatarItem.image}
                alt={`Avatar ${index + 1}`}
                onMouseEnter={() => setIsHovered(index)} // Set the hovered index
                onMouseLeave={() => setIsHovered(null)} // Reset when mouse leaves
                style={{
                  boxShadow: isHovered === index || avatar === avatarItem.image  ? "1px 1px 20px 8px rgba(6,240,255,0.35" : "",
                  // boxShadow: avatar === index ? "1px 1px 20px 8px rgba(6,240,255,0.35" : "",
                }}
                onClick={() => setAvatar(avatarItem.image)}
              />
            ))}
            </div>
            <div className="login_register_section_password_avatar_inner_container_two"></div>
          </div>
          <div className="login_registe_btn-container">
            {!isloading ? (
              <button className="login_register_section_btn">Register</button>
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
