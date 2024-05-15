import "./App.css";
import { Nav } from "./Components/Header/Nav";
import { RoutesPage,  } from "./Pages/Routes/RoutesPage";
import { UserContext, UserContextProvider } from "./Components/UserContext/UserContext";
import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { Footer } from "./Components/Footer/Footer";

const logedInUserInfo = window.localStorage.getItem("user_information") || false;



  // console.log("logedInUserInfo catched-------", logedInUserInfo)

function App() {
  const [menu, setMenu] = useState();
  const [userInfoLocal, setUserInfoLocal] = useState(logedInUserInfo.username);
  const location = useLocation();
  const { pathname } = useLocation();
  const { isLogedIn, userInfo } = useContext(UserContext);

  console.log("pathname:", pathname)
  console.log("location:", location)

  const onPage = ['login', 'register', 'post'];
  const isOnPage = onPage.some(page => pathname.includes(page));

  console.log("isLogedIn:", isLogedIn)
  console.log("userInfo:", userInfo)
  
  useEffect(() => {

    setUserInfoLocal(JSON.parse(window.localStorage.getItem("user_information")))

    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    setMenu(false)

    if(!isLogedIn){
      <Navigate to="/"/>
    } 
  }, [pathname, isLogedIn]);

  useEffect(() => {
    // setUserInfoLocal(JSON.parse(window.localStorage.getItem("user_information")))

    // --------------------- TODO
    // if(!logedInUserInfo && location.pathname !== "/" ){
    //   <Navigate to={"/"} />
    //   console.log("userInfoLocal inside of if", userInfoLocal)
    // }
  }, []);

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
        />
        <RoutesPage setMenu={setMenu} setUserInfoLocal={setUserInfoLocal} userInfoLocal={userInfoLocal} />
        {/* <Footer /> */}
      </main>
    </UserContextProvider>
  );
}

export default App;
