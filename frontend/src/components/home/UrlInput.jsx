import { useState } from "react";
import useCreateShortUrl from "../../hooks/useCreateShortUrl";

const UrlInput = () => {
  const [longUrl, setLongUrl] = useState("");
  const { loading, createShortUrl } = useCreateShortUrl();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createShortUrl(longUrl);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter the url you want to convert"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UrlInput;
