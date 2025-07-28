import { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const putUserData = (data) => {
    setUserInfo(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem("user");
    if (userInfoLocalStorage) {
      setUserInfo(JSON.parse(userInfoLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
