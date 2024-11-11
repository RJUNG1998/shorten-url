import ShortUrlWrapper from "../../components/home/ShortUrlWrapper";
import UrlInput from "../../components/home/UrlInput";

const Home = () => {
  return (
    <div className="flex flex-col">
      <UrlInput />
      <ShortUrlWrapper />
    </div>
  );
};

export default Home;
