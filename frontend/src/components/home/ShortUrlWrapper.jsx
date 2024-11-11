import { useUrlContext } from "../../../context/UrlContext";

const ShortUrlWrapper = () => {
  const { shortUrl } = useUrlContext();
  return (
    <div>
      <a
        href={`http://localhost:4000/${shortUrl}`}
      >{`http://localhost:4000/${shortUrl}`}</a>
    </div>
  );
};

export default ShortUrlWrapper;
