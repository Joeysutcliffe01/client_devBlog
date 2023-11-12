import "./App.css";
import { Nav } from "./Components/Header/Nav";
import { RoutesPage } from "./Pages/Routes/RoutesPage";
import { UserContextProvider } from "./Components/UserContext/UserContext";
import { useEffect, useState } from "react";
import { Footer } from "./Components/Footer/Footer";

const logedInUserInfo =
  window.localStorage.getItem("user_information") || false;

function App() {
  const [menu, setMenu] = useState();
  const [userInfoLocal, setUserInfoLocal] = useState(false);

  useEffect(() => {
    fetch("https://backend-devblog.onrender.com/profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfoLocal(userInfo);
      });
    });
    // setRedirect(true);
    // console.log("userInfo from nav useEffect", userInfoLocal);
    // setUserInfoLocal(JSON.parse(logedInUserInfo));
  }, []);

  // localStorage.removeItem("isLogedIn_localStorage");

  // console.log("userInfoLocal from App____------", userInfoLocal);

  return (
    <UserContextProvider>
      <main className={menu ? "main_content fixed" : "main_content"}>
        <Nav
          menu={menu}
          setMenu={setMenu}
          userInfoLocal={userInfoLocal}
          setUserInfoLocal={setUserInfoLocal}
        />
        <RoutesPage setMenu={setMenu} setUserInfoLocal={setUserInfoLocal} />
        {/* <Footer /> */}
      </main>
    </UserContextProvider>
  );
}

export default App;
