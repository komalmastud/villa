import Card from "./Components/Card";
import Collection from "./Components/Collection";
import Icons from "./Components/Icons";
import Search from "./Components/Search";
import Trending from "./Components/Trending";
import Bestrate from "./Components/Bestrate";
import Ratecard from "./Components/Ratecard";
import Rate from "./Components/Rate";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <>
      <div className="midcontents">
        <Search />
        <Icons />
        <Trending />
        <Card />
        <Collection />
        <Bestrate />
        <Ratecard />
        <Rate />
        <Footer />
      </div>
    </>
  );
};

export default Home;
