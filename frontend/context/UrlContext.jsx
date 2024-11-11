import { createContext, useContext, useState } from "react";

export const UrlContext = createContext();

export const useUrlContext = () => {
  return useContext(UrlContext);
};

// eslint-disable-next-line react/prop-types
export const UrlContextProvider = ({ children }) => {
  const [shortUrl, setShortUrl] = useState("");
  return (
    <UrlContext.Provider value={{ shortUrl, setShortUrl }}>
      {children}
    </UrlContext.Provider>
  );
};
