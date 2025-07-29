import { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const putUserData = (data) => {
    setUserInfo(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUserInfo({});
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const userInfoLocalStorage = localStorage.getItem("user");
    if (userInfoLocalStorage) {
      setUserInfo(JSON.parse(userInfoLocalStorage));
    }
    setLoading(false); // terminou de carregar do localStorage
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, putUserData, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
