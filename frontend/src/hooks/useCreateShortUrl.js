import { useState } from "react";
import { useUrlContext } from "../../context/UrlContext";

const useCreateShortUrl = () => {
  const [loading, setLoading] = useState(false);
  const { setShortUrl } = useUrlContext();
  const createShortUrl = async (longUrl) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/url`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setShortUrl(data.data.shorturl);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, createShortUrl };
};

export default useCreateShortUrl;
