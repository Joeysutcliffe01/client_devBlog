import "./App.css";
import { Nav } from "./Components/Header/Nav";
import { RoutesPage,  } from "./Pages/Routes/RoutesPage";
import { UserContextProvider } from "./Components/UserContext/UserContext";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { Footer } from "./Components/Footer/Footer";

const logedInUserInfo = window.localStorage.getItem("user_information") || false;

  // console.log("logedInUserInfo catched-------", logedInUserInfo)

function App() {
  const [menu, setMenu] = useState();
  const [userInfoLocal, setUserInfoLocal] = useState(logedInUserInfo.username);
  const location = useLocation();

  const { pathname } = useLocation();

  const onPage = ['login', 'register', 'post'];

  const isOnPage = onPage.some(page => pathname.includes(page));

  // console.log("isOnPage----", isOnPage)

  useEffect(() => {
    setUserInfoLocal(JSON.parse(window.localStorage.getItem("user_information")))
  }, []);

  if(userInfoLocal === null && location.pathname !== "/" ){
    <Navigate to={"/"} />;
 }

  return (
    <UserContextProvider>
      <main 
      className={menu ? "main_content fixed" : "main_content"} 
      style={{ position:  !userInfoLocal && !isOnPage && "fixed"}}
  >
        <Nav
          menu={menu}
          setMenu={setMenu}
          userInfoLocal={userInfoLocal}
          setUserInfoLocal={setUserInfoLocal}
          isOnPage={isOnPage}
        />
        <RoutesPage setMenu={setMenu} setUserInfoLocal={setUserInfoLocal} userInfoLocal={userInfoLocal} />
        {/* <Footer /> */}
      </main>
    </UserContextProvider>
  );
}

export default App;
