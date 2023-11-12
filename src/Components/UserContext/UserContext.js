import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [isLogedIn, setIsLogedIn] = useState(null);

  // console.log("userInfo..............", userInfo);

  return (
    <UserContext.Provider
      value={{ userInfo, setUserInfo, isLogedIn, setIsLogedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}
